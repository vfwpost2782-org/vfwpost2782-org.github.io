### 4Jan2022 - NOTE - HTML Data Attributes
- [https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

### 4Jan2022 - NOTE - A2HS (Add to Home Screen)
- **MDN Blog Post:** [https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen)
- **Blog Post Demo Git Repo (Foxes):** [https://github.com/mdn/pwa-examples/tree/master/a2hs](https://github.com/mdn/pwa-examples/tree/master/a2hs)

----

### Kick Ass Pure CSS Card stack
- [https://github.com/fireship-io/stacked-card-list/tree/master/public](https://github.com/fireship-io/stacked-card-list/tree/master/public)

### Git Repo to Generate Android WebView Java App - Hopefully can be built with just `apktool` and don't need full blown AndroidStudio
- https://github.com/raelmax/android-webview

### Next Steps - MOST DONE AS OF 14Dec2021!

- Create new `vfwpost2782/vfwpost2782-web-datastore.git` **PRIVATE** Repository
- Move **REAL** `_data/lifemembers.csv` under the new private repo which only the account owner and myself have access to
- Create "hello-world" example placeholder data in **PUBLIC** `vfwpost2782/vfwpost2782.github.io/_data/lifemembers.csv` 
- - the "dummy" data will be used by default and in the event of any failure to obtain real remote data file from Google Sheets
- Create modified workflow and action files for new private repository that will poll for changes on cron schedule (to begin with - ultimately want to trigger only on update of the Google Sheet using Action Webhooks and Google App Scripts later on for efficiency)
- - See the following docs for Google Apps Script (JavaScript Framework) examples of triggering webhooks / emitting events in response to Google Sheets / Apps events and making a document accessible remotely:
- - - [https://developers.google.com/apps-script](https://developers.google.com/apps-script)
- - - [https://developers.google.com/apps-script/api/concepts](https://developers.google.com/apps-script/api/concepts)
- - This script can at first just always `wget` the remote to start, but later ultimately should extend to perform `MD5 / SHA` hash checking of current file in private repository and calculated sum of remote payload - use as control flow modifier 
- - - if `GET` request `FAIL - 4xx5xx`, report the error via new issue or email / push notification containing runtime context metadata and any stack trace - take no further action for the current iteration
- - - if `GET` request `SUCCESS - 200`, compute hash checksum of response payload and existing repository payload - if `LOCAL_MD5_SUM == REMOTE_MD5_SUM` take no further action, report current iteration exit status as `0` - if `LOCAL_MD5_SUM != REMOTE_MD5_SUM` replace the existing repository file in `$(GITHUB_WORKSPACE)` with newly obtained remote payload - checkout local branch of private repository - execute git commit and push - report status as data updated successfully. There will be sufficient action workflow triggers on the repository to subsequently trigger **PUBLIC SSG REPOSITORY BUILD AND PUBLISH TO WEB**
- See the following doc and Git Repo which provide a great working foundation for obtaining remote web assets, comparing to known version, checkout and commit across multiple repositories - public and private:
- - [https://iven.in/devops/github-actions-run-bash-script/](https://iven.in/devops/github-actions-run-bash-script/)
- - [https://github.com/marketplace/actions/push-directory-to-another-repository](https://github.com/marketplace/actions/push-directory-to-another-repository)
