/*

// OTHER OPTIONS FIRST, BEFORE PHASER!!

// These first two are really nice, because they are best suited to SPA / PWA / SSG format, and use main / article / section elements to denote pagination (slides)

// Reveal.js - web presentation (slides) framework
// See: https://revealjs.com/auto-slide/

// Webslides.js - web presentation (slides) framework
// See: https://webslides.tv/demos/classes#slide=1

/* ------------- */

// This one would be more effort, but is definitely interesting...

// Marp / Marpit - Markdown web presentation (slides) framework
// See: https://marp.app/
// See: https://marpit.marp.app/usage

/* ------------- */

// Use the Phaser3 GameDev Library with DOMElements!
// Src:  https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
// Docs: https://newdocs.phaser.io/docs/3.55.2/Phaser.GameObjects.DOMElement
// Git:  https://github.com/photonstorm/phaser3-examples

// Basically, idea will be to preload an array of DOMElement objects using our Life Members data, then iteratively display, animate, destroy them as they cross
// our "world boundaries"! This should allow you to do what you have been trying to do (and MUCH more) with simple CSS transitions, etc.

var validBranchNames = ['airforce', 'army', 'coastguard', 'marinecorps', 'nationalguard', 'navy', 'spaceforce'];

var membersArray = [{"membername":"ABRAHAM, ANTHONY","memberbranch":"default"},{"membername":"ADSIT, HOYT, F","memberbranch":"default"},{"membername":"ALDRICH, ROBERT","memberbranch":"army"},{"membername":"ALLMENINGER, MILTON","memberbranch":"Army"},{"membername":"ANGELINO,  CHARLES","memberbranch":"ARMY"},{"membername":"ANGELINO, JOSEPH, G","memberbranch":"default"},{"membername":"ANTONY, DONALD","memberbranch":"default"},{"membername":"ATKINSON, CARLTON","memberbranch":"airforce"},{"membername":"AUSTIN, DONALD","memberbranch":"AirForce"},{"membername":"BADGER, CLYDE, E","memberbranch":"AIRFORCE"},{"membername":"BALLIN, WILLIAM","memberbranch":"coastguard"},{"membername":"BARBAROSA, RALPH, J","memberbranch":"CoastGuard"},{"membername":"BARROWS, HOWARD, A","memberbranch":"COASTGUARD"},{"membername":"BAUER, DAVID, J","memberbranch":"marinecorps"},{"membername":"BAXTER, LYNN","memberbranch":"MarineCorps"},{"membername":"BECKWITH, RICHARD","memberbranch":"MARINECORPS"},{"membername":"BELTZ, WILLIAM, J","memberbranch":"nationalguard"},{"membername":"BENEDICTO, FRANK, J","memberbranch":"NationalGuard"},{"membername":"BENENATI, FRANK, J","memberbranch":"NATIONALGUARD"},{"membername":"BENENATI, JOSEPH","memberbranch":"navy"},{"membername":"BERNARDI,  STEPHEN","memberbranch":"Navy"},{"membername":"BERRY, CARL, L","memberbranch":"NAVY"},{"membername":"BIANCO,  FRANK","memberbranch":"spaceforce"},{"membername":"BICE, THOMAS","memberbranch":"SpaceForce"},{"membername":"BIVIANO, JOSEPH","memberbranch":"SPACEFORCE"},{"membername":"BOARDMAN, CLIFFORD, E","memberbranch":"AireFoceMispelling"},{"membername":"BOISE, DAVID, W","memberbranch":"nonExistingBranch"},{"membername":"BRAD, JOHN","memberbranch":"default"},{"membername":"BRADT, JOHN, S","memberbranch":"default"},{"membername":"BRADY, FRANK, M","memberbranch":"SonOfAComma, Havin, Fun"},{"membername":"BRANDT, JOHN, S","memberbranch":"default"},{"membername":"BRESINA, TERRY, J","memberbranch":"default"},{"membername":"BRIGHAM, JOHN, L","memberbranch":"default"},{"membername":"BRIGHAM, LEON","memberbranch":"default"},{"membername":"BROIS, JOSEPH, J","memberbranch":"default"},{"membername":"BROOKER, DALE","memberbranch":"Some Buck with SPACES IN IT"},{"membername":"BROPHY, RICHARD","memberbranch":"default"},{"membername":"BROWN, CHARLES, R","memberbranch":"default"},{"membername":"BROWN, RICHARD, N","memberbranch":"default"},{"membername":"BROWNHOLTZ, RALPH","memberbranch":"default"},{"membername":"BUITEN, GARY  VAN","memberbranch":"default"},{"membername":"BURKE, HOWARD, A","memberbranch":"default"},{"membername":"BURR, DONALD, H","memberbranch":"default"},{"membername":"BUTLER, FREDRICK","memberbranch":"default"},{"membername":"BYRNE, GEORGE","memberbranch":"default"},{"membername":"CAEZZA, JOHN","memberbranch":"default"},{"membername":"CALDWELL, MARK, A","memberbranch":"default"},{"membername":"CAREY, JOHN, J","memberbranch":"default"},{"membername":"CAREY, ROBERT, H","memberbranch":"default"},{"membername":"CARHART, JOHN, C","memberbranch":"default"},{"membername":"CARLSON, LEON","memberbranch":"default"},{"membername":"CARNEY, HERMAN","memberbranch":"default"},{"membername":"CARRIER, LESTER, L","memberbranch":"default"},{"membername":"CARRY, JOHN","memberbranch":"default"},{"membername":"CASSADA, HENRY","memberbranch":"default"},{"membername":"CAULFIELD, DANIEL, J","memberbranch":"default"},{"membername":"CEVASCO, ROBERT, S","memberbranch":"default"},{"membername":"CHAMBERS, ROY","memberbranch":"default"},{"membername":"CHAN, TIMOTHY, L","memberbranch":"default"},{"membername":"CHESEBRO, JOHN","memberbranch":"default"},{"membername":"CHOMYSZAK, JERRY","memberbranch":"default"},{"membername":"CLARK, IRVING, A","memberbranch":"default"},{"membername":"CLEVELAND, GEORGE, R","memberbranch":"default"},{"membername":"COE, JOSEPH, W","memberbranch":"default"},{"membername":"COLE, GORDON, S","memberbranch":"default"},{"membername":"COLLIER, ERWIN, S","memberbranch":"default"},{"membername":"COLLINS, THOMAS","memberbranch":"default"},{"membername":"CONANT, THEORDORE","memberbranch":"default"},{"membername":"CONNICK, GEOFFREY","memberbranch":"default"},{"membername":"COOK, RICHARD","memberbranch":"default"},{"membername":"COUCH, JOHN","memberbranch":"default"},{"membername":"COUGHLIN, WILLIAM","memberbranch":"default"},{"membername":"COX, DAVID","memberbranch":"default"},{"membername":"COX, PAUL","memberbranch":"default"},{"membername":"CRAIN, WILLIAM","memberbranch":"default"},{"membername":"CROSIER, LEROY, F","memberbranch":"default"},{"membername":"CUMMING, JOSEPH","memberbranch":"default"},{"membername":"CUMMING, JOSEPH, JR","memberbranch":"default"},{"membername":"DANALUX, ALEX","memberbranch":"default"},{"membername":"DANIELS,  LARRY, H","memberbranch":"default"},{"membername":"DARME, DANIEL, D","memberbranch":"default"},{"membername":"DE GEAR, CHARLES","memberbranch":"default"},{"membername":"DEADY, EDWARD, F","memberbranch":"default"},{"membername":"DEADY, RAYMOND, W","memberbranch":"default"},{"membername":"DEAN, PAUL, D","memberbranch":"default"},{"membername":"DECKER, GEORGE, E","memberbranch":"default"},{"membername":"DECKER, WILLARD","memberbranch":"default"},{"membername":"DELANEY, JAMES","memberbranch":"default"},{"membername":"DERMODY, EDWARD","memberbranch":"default"},{"membername":"DESPRES, ROBERT","memberbranch":"default"},{"membername":"DEUEL, CLIFFORD","memberbranch":"default"},{"membername":"DEVEL, CLIFFORD, A","memberbranch":"default"},{"membername":"DEWEY, DANIEL","memberbranch":"default"},{"membername":"DI LORENZO, JOSEPH","memberbranch":"default"},{"membername":"DIAMOND, IRVING, A","memberbranch":"default"},{"membername":"DIEFENBACHER, CHARLES","memberbranch":"default"},{"membername":"DIEFENBACHER, DAVID","memberbranch":"default"},{"membername":"DISTEFANO, JOSEPH","memberbranch":"default"},{"membername":"DITTY, KENNETH","memberbranch":"default"},{"membername":"DIXSON, NORMAN","memberbranch":"default"},{"membername":"DOLAN, JOHN","memberbranch":"default"},{"membername":"DOWNEY, ROBERT, J","memberbranch":"default"},{"membername":"DOWNEY, THOMAS, E","memberbranch":"default"},{"membername":"DOYLE, ROBERT, G","memberbranch":"default"},{"membername":"DUMOND, TIMOTHY","memberbranch":"default"},{"membername":"DUMOND, TIMOTHY, M","memberbranch":"default"},{"membername":"DUNN, EDWIN","memberbranch":"default"},{"membername":"EATON, THOMAS, V","memberbranch":"default"},{"membername":"ECCLESTON, JAMES, L","memberbranch":"default"},{"membername":"ELLISON, JOHN","memberbranch":"default"},{"membername":"EMERT, MARSHALL","memberbranch":"default"},{"membername":"EVANS, WILLIAM, J","memberbranch":"default"},{"membername":"FAVALORO, THOMAS","memberbranch":"default"},{"membername":"FELLEN, JOSEPH","memberbranch":"default"},{"membername":"FELTER, RALPH, E","memberbranch":"default"},{"membername":"FERRY, JOHN, J","memberbranch":"default"},{"membername":"FERRY, ROBERT","memberbranch":"default"},{"membername":"FIGARY, FRANK","memberbranch":"default"},{"membername":"FOLSOM, RICHARD, D","memberbranch":"default"},{"membername":"FOOTE, FREDRICK, A","memberbranch":"default"},{"membername":"FORD, LEWIS, H","memberbranch":"default"},{"membername":"FOSTER, RAYMOND","memberbranch":"default"},{"membername":"FOWLSTON, RICHARD, F","memberbranch":"default"},{"membername":"FRANKLIN, CLARENCE","memberbranch":"default"},{"membername":"FRANKLIN, CLYDE, D","memberbranch":"default"},{"membername":"FREDENBURG, ROBERT, D","memberbranch":"default"},{"membername":"FRINK, ELVERD","memberbranch":"default"},{"membername":"FUNKE, HAROLD","memberbranch":"default"},{"membername":"GAGE, BRIAN, L","memberbranch":"default"},{"membername":"GAGE, BRYCE, M","memberbranch":"default"},{"membername":"GAGE, DONALD, R","memberbranch":"default"},{"membername":"GALVIN, ROBERT, J","memberbranch":"default"},{"membername":"GARITO, ANGELO, J","memberbranch":"default"},{"membername":"GARITO, BART, C","memberbranch":"default"},{"membername":"GAWENUS, CARL, H","memberbranch":"default"},{"membername":"GENNIS, RALPH","memberbranch":"default"},{"membername":"GEORGE, CHARLES, R","memberbranch":"default"},{"membername":"GEORGE, RONALD, J","memberbranch":"default"},{"membername":"GEORGIA, DOUGLAS","memberbranch":"default"},{"membername":"GIBSON, VARLEY, B","memberbranch":"default"},{"membername":"GILBERT, ROBERT, E","memberbranch":"default"},{"membername":"GILMORE, CHARLES, W","memberbranch":"default"},{"membername":"GOLLIVER, GEORGE","memberbranch":"default"},{"membername":"GOODWIN,  RICHARD","memberbranch":"default"},{"membername":"GOOLEY, RAYMOND","memberbranch":"default"},{"membername":"GORMAN, WALTER, J","memberbranch":"default"},{"membername":"GRACIN, ANDREW","memberbranch":"default"},{"membername":"GRAEF, ROBERT","memberbranch":"default"},{"membername":"GRAF, JOSEPH","memberbranch":"default"},{"membername":"GRAY, ROGER","memberbranch":"default"},{"membername":"GREELEY, JOHN","memberbranch":"default"},{"membername":"GREEN, JAMES","memberbranch":"default"},{"membername":"GREWE, JOHN, E","memberbranch":"default"},{"membername":"GROBB, BARRY, M","memberbranch":"default"},{"membername":"GUNTHER, ROY, R","memberbranch":"default"},{"membername":"HAYNES, JAMES","memberbranch":"default"},{"membername":"HEATON, TIMOTHY, H","memberbranch":"default"},{"membername":"HENDRICKS, CLIFFORD","memberbranch":"default"},{"membername":"HERFORD, RICHARD, A","memberbranch":"default"},{"membername":"HESS, RICHARD, J","memberbranch":"default"},{"membername":"HICKLING, RICHARD, J","memberbranch":"default"},{"membername":"HICKS, HERBERT, E","memberbranch":"default"},{"membername":"HICKS, MICHAEL","memberbranch":"default"},{"membername":"HILL, MACK","memberbranch":"default"},{"membername":"HILSINGER, JERRY","memberbranch":"default"},{"membername":"HITT, FORD","memberbranch":"default"},{"membername":"HODGE, NORMAN, F","memberbranch":"default"},{"membername":"HOGAN, JAMES","memberbranch":"default"},{"membername":"HOPSON, JOHN","memberbranch":"default"},{"membername":"HORTH, KEITH, M","memberbranch":"default"},{"membername":"HORTON, HAROLD, H, JR","memberbranch":"default"},{"membername":"HOTALING, EDWARD","memberbranch":"default"},{"membername":"HOVER, JOSEPH","memberbranch":"default"},{"membername":"HOVER, JOSEPH, M","memberbranch":"default"},{"membername":"HOWE, JAMES","memberbranch":"default"},{"membername":"INGRAHAM, RICHARD, A","memberbranch":"default"},{"membername":"IVORY, THOMAS","memberbranch":"default"},{"membername":"JACKSON, PAUL","memberbranch":"default"},{"membername":"JACOBI, MARTIN","memberbranch":"default"},{"membername":"JAMISON, BRUCE","memberbranch":"default"},{"membername":"JAYCOX, RICHARD, P","memberbranch":"default"},{"membername":"JEFFERY, CHARLES, M","memberbranch":"default"},{"membername":"JEFFERY, ROGER","memberbranch":"default"},{"membername":"JENNINGS, HAROLD","memberbranch":"default"},{"membername":"JOHNSON, LAUREN, L","memberbranch":"default"},{"membername":"JOHNSON, LOUIS, E","memberbranch":"default"},{"membername":"JOY, BRIAN","memberbranch":"default"},{"membername":"KALESA, BENJAMIN","memberbranch":"default"},{"membername":"KAPPAUF, ROBERT","memberbranch":"default"},{"membername":"KEATOR, DONALD","memberbranch":"default"},{"membername":"KENNEDY, THOMAS","memberbranch":"default"},{"membername":"KENT, ROGER, H","memberbranch":"default"},{"membername":"KING, THOMAS","memberbranch":"default"},{"membername":"KINNEY, GLEN","memberbranch":"default"},{"membername":"KLINDT, ROBERT, E","memberbranch":"default"},{"membername":"KLINKO, JAMES, P","memberbranch":"default"},{"membername":"KLOCKOWSKI, JOHN, J","memberbranch":"default"},{"membername":"KRAEGER, ALAN","memberbranch":"default"},{"membername":"KREINER, MICHEAL, V","memberbranch":"default"},{"membername":"KROEGER, CHARLES, R","memberbranch":"default"},{"membername":"KRYGIER, RAYMOND","memberbranch":"default"},{"membername":"KUTICK, CHARLES","memberbranch":"default"},{"membername":"LACY, DUANE","memberbranch":"default"},{"membername":"LADNER, RALPH, C","memberbranch":"default"},{"membername":"LAFAVE, RICHARD E","memberbranch":"default"},{"membername":"LAMB, DAVID, A","memberbranch":"default"},{"membername":"LAMB, LEWIS, JR","memberbranch":"default"},{"membername":"LANDERS, KEITH","memberbranch":"default"},{"membername":"LANG, ERNEST, M","memberbranch":"default"},{"membername":"LASHWAY, DONALD, E","memberbranch":"default"},{"membername":"LAW, BRIAN","memberbranch":"default"},{"membername":"LAW, KATHLEEN","memberbranch":"default"},{"membername":"LAWRENCE, FREDRICK","memberbranch":"default"},{"membername":"LAWRENCE, MANUEL","memberbranch":"default"},{"membername":"LAWRENCE, RAYMOND, P","memberbranch":"default"},{"membername":"LAWS, ROGER, L","memberbranch":"default"},{"membername":"LEACH, ARTHER","memberbranch":"default"},{"membername":"LEAHY, EDWARD","memberbranch":"default"},{"membername":"LEAHY, EDWARD, J","memberbranch":"default"},{"membername":"LEAHY, ROBERT, J","memberbranch":"default"},{"membername":"LEAHY, THOMAS","memberbranch":"default"},{"membername":"LEAHY, THOMAS, F","memberbranch":"default"},{"membername":"LEE, DAVID, E","memberbranch":"default"},{"membername":"LEE, EDWARD, J","memberbranch":"default"},{"membername":"LEE, WILLIAM","memberbranch":"default"},{"membername":"LIBERATORE, JOACHIM","memberbranch":"default"},{"membername":"LIBERATORE, JOHN, A","memberbranch":"default"},{"membername":"LIBERATORE, WILLIAM","memberbranch":"default"},{"membername":"LILLEY, WAYNE, R","memberbranch":"default"},{"membername":"LOBDELL, ROBERT","memberbranch":"default"},{"membername":"LOBDELL, ROBERT, G","memberbranch":"default"},{"membername":"LOEWENSTEIN, ERNEST","memberbranch":"default"},{"membername":"LOOMIS, JESSE, D","memberbranch":"default"},{"membername":"MACFARLAND, LOGAN, K","memberbranch":"default"},{"membername":"MAGISTRO, ANTHONY, A","memberbranch":"default"},{"membername":"MAGISTRO, ANTHONY, T","memberbranch":"default"},{"membername":"MAIURANO, FRANCIS","memberbranch":"default"},{"membername":"MAIURANO, JOHN, J","memberbranch":"default"},{"membername":"MARKS, TED","memberbranch":"default"},{"membername":"MARSHALL, EMERT, L","memberbranch":"default"},{"membername":"MARTIN, JAMES","memberbranch":"default"},{"membername":"MAY, THOMAS, M","memberbranch":"default"},{"membername":"MEAD, NEIL, E","memberbranch":"default"},{"membername":"MEINHOLD, WILLIAM, B","memberbranch":"default"},{"membername":"MERCURIO, SAMUEL, C","memberbranch":"default"},{"membername":"MERRIT, BERNARD, L","memberbranch":"default"},{"membername":"MEW, LAWRENCE, D","memberbranch":"default"},{"membername":"MEYERS, CHARLES, R","memberbranch":"default"},{"membername":"MEYERS, DONALD, E","memberbranch":"default"},{"membername":"MEYERS, HARRY, R","memberbranch":"default"},{"membername":"MEYERS, MICHEAL","memberbranch":"default"},{"membername":"MILLER, BRYON","memberbranch":"default"},{"membername":"MILLER, JOHN","memberbranch":"default"},{"membername":"MILLER, STEPHEN","memberbranch":"default"},{"membername":"MIRABITO, ANGELO, J","memberbranch":"default"},{"membername":"MIRABITO, ANTHONY, T","memberbranch":"default"},{"membername":"MIRABITO, FRANK","memberbranch":"default"},{"membername":"MIRABITO, GEORGE","memberbranch":"default"},{"membername":"MOHR, ELBERT","memberbranch":"default"},{"membername":"MONROE, DONALD","memberbranch":"default"},{"membername":"MONROE, ELWIN, J","memberbranch":"default"},{"membername":"MONROE, LLEWELLYN","memberbranch":"default"},{"membername":"MONTGOMERY, VICTOR","memberbranch":"default"},{"membername":"MOORE, RICHARD, H","memberbranch":"default"},{"membername":"MORAJDA, JOHN, F, SR","memberbranch":"default"},{"membername":"MORRIS, WILLIAM","memberbranch":"default"},{"membername":"MORSE, LEWIS, W","memberbranch":"default"},{"membername":"MULROY, THOMAS, J","memberbranch":"default"},{"membername":"MULVEY, JOHN","memberbranch":"default"},{"membername":"MURPHY, LEONARD","memberbranch":"default"},{"membername":"MUSERILLI, ANGELO, F","memberbranch":"default"},{"membername":"MacGILLIURAY, CW","memberbranch":"default"},{"membername":"McCARTHY, VERON","memberbranch":"default"},{"membername":"McCORMIC, MICHEAL","memberbranch":"default"},{"membername":"McELIGOT, JEROME, E","memberbranch":"default"},{"membername":"McGOWAN, JAMES, F","memberbranch":"default"},{"membername":"McGUIRE, PHILIP, J","memberbranch":"default"},{"membername":"McNITT, KENNTH","memberbranch":"default"},{"membername":"McVEIGH, JIM","memberbranch":"default"},{"membername":"NAVE, GEORGE, J","memberbranch":"default"},{"membername":"NEWMAN, DONALD","memberbranch":"default"},{"membername":"NIGHTENGALE, ROBERT","memberbranch":"default"},{"membername":"NORTHRUP, HAWLEY","memberbranch":"default"},{"membername":"NORTON, EUGENE","memberbranch":"default"},{"membername":"NOWALK, FRANKLIN","memberbranch":"default"},{"membername":"O'NEIL, JOHN","memberbranch":"default"},{"membername":"OLIN, DAVID","memberbranch":"default"},{"membername":"OWENS, JOHN","memberbranch":"default"},{"membername":"PADEN, DAVID, A","memberbranch":"default"},{"membername":"PAGE, ROBERT","memberbranch":"default"},{"membername":"PALMATIER, KENNETH, C","memberbranch":"default"},{"membername":"PALMER, PAUL, P","memberbranch":"default"},{"membername":"PALMER, RONALD, J","memberbranch":"default"},{"membername":"PANARO, JOHN","memberbranch":"default"},{"membername":"PARKER, DAVID","memberbranch":"default"},{"membername":"PARSONS, DONALD, M","memberbranch":"default"},{"membername":"PHELPS, DAVID, D","memberbranch":"default"},{"membername":"PHELPS, ROBERT, E, JR","memberbranch":"default"},{"membername":"PHILHOWER, WILLIAM, H","memberbranch":"default"},{"membername":"PHILLIPS, MICHAEL","memberbranch":"default"},{"membername":"PIATTI, ALBERT, J","memberbranch":"default"},{"membername":"PIATTI, THOMAS","memberbranch":"default"},{"membername":"PLONUS, ROBERT","memberbranch":"default"},{"membername":"PODENACK, GARY","memberbranch":"default"},{"membername":"PODENAK, GARY, L","memberbranch":"default"},{"membername":"PODENAK, GEORGE","memberbranch":"default"},{"membername":"POGGIOLI, JOHN","memberbranch":"default"},{"membername":"POLANCO, SERGIO","memberbranch":"default"},{"membername":"POLLARD, HARRY, R","memberbranch":"default"},{"membername":"POOLER, PAUL, L","memberbranch":"default"},{"membername":"POPE, CHARLES, A","memberbranch":"default"},{"membername":"PRINDLE, WALTER, G","memberbranch":"default"},{"membername":"QUARTUCCIO, FRANK","memberbranch":"default"},{"membername":"QUARTUCCIO, MICHEAL","memberbranch":"default"},{"membername":"RAFUSE, CYRIL, W","memberbranch":"default"},{"membername":"RAHN, JAMES, L","memberbranch":"default"},{"membername":"RAPHAEL, MORRIS","memberbranch":"default"},{"membername":"RAPHAEL, RORERT, C, JR","memberbranch":"default"},{"membername":"RAY, LYDON","memberbranch":"default"},{"membername":"REVOIR, FRANK, B","memberbranch":"default"},{"membername":"RICE, HUGE, T","memberbranch":"default"},{"membername":"RICE, MARK","memberbranch":"default"},{"membername":"RICHARDS, FRANK, W","memberbranch":"default"},{"membername":"ROBINOWITZ, SUSAN, J","memberbranch":"default"},{"membername":"ROGERS, MARK, C","memberbranch":"default"},{"membername":"ROGERS, WALTER, O","memberbranch":"default"},{"membername":"ROSKELLY, ROBERT, T","memberbranch":"default"},{"membername":"ROSS, GREGORY, A","memberbranch":"default"},{"membername":"ROWE, CHARLES","memberbranch":"default"},{"membername":"RUCK, THEADORE, E","memberbranch":"default"},{"membername":"RUDENKO, FELIX","memberbranch":"default"},{"membername":"RUTAN, ERNEST, B","memberbranch":"default"},{"membername":"RUTHERFORD, WILLIAM","memberbranch":"default"},{"membername":"RYAN, MICHEAL, J","memberbranch":"default"},{"membername":"SANTIAGO, JOSEPH, F","memberbranch":"default"},{"membername":"SCHEIER, FRANK, W","memberbranch":"default"},{"membername":"SCHELDON, JAMES","memberbranch":"default"},{"membername":"SCHRYBER, HOWARD, A","memberbranch":"default"},{"membername":"SCHUCK, EDWARD, R","memberbranch":"default"},{"membername":"SCHUCK, WILLIAM, D","memberbranch":"default"},{"membername":"SCHUSTER, CHARLES, K","memberbranch":"default"},{"membername":"SCOTT, JAMES, W","memberbranch":"default"},{"membername":"SCOTT, KENNETH","memberbranch":"default"},{"membername":"SCUDDER, GERALD, W","memberbranch":"default"},{"membername":"SHAUL, HOWARD","memberbranch":"default"},{"membername":"SHERMAN, JOHN, F","memberbranch":"default"},{"membername":"SHERWOOD, LEONARD","memberbranch":"default"},{"membername":"SHIMER, JAMES","memberbranch":"default"},{"membername":"SHIMER, ROBERT","memberbranch":"default"},{"membername":"SIDOTE, EDWARD, J","memberbranch":"default"},{"membername":"SIMPSON, GARY","memberbranch":"default"},{"membername":"SMITH, GARY","memberbranch":"default"},{"membername":"SMITH, JAMES, J","memberbranch":"default"},{"membername":"SMITH, JEFFREY, L","memberbranch":"default"},{"membername":"SMITH, ROBERT, E","memberbranch":"default"},{"membername":"SMITH, RONALD, F","memberbranch":"default"},{"membername":"SMITH, THOMAS, F","memberbranch":"default"},{"membername":"SNEDDON, JAMES, H","memberbranch":"default"},{"membername":"SPANG, WILLIAM","memberbranch":"default"},{"membername":"STANBRO, VINCENT","memberbranch":"default"},{"membername":"STEPHENS, BARRY","memberbranch":"default"},{"membername":"STILWELL, VYRLE, S","memberbranch":"default"},{"membername":"STONE, STEVEN, P","memberbranch":"default"},{"membername":"STONE, WARREN, G","memberbranch":"default"},{"membername":"STOWELL, RICHARD, J","memberbranch":"default"},{"membername":"SULLIVAN, EDWARD","memberbranch":"default"},{"membername":"SULLIVAN, JOHN, E","memberbranch":"default"},{"membername":"SYMONDS, DAVID, S","memberbranch":"default"},{"membername":"SYMONDS, GORDON, W","memberbranch":"default"},{"membername":"THOMAS, NEIL, B","memberbranch":"default"},{"membername":"THOMPSON, ALVIN","memberbranch":"default"},{"membername":"THOMPSON, ARTHUR","memberbranch":"default"},{"membername":"THOMPSON, CHRISTOPHER, L","memberbranch":"default"},{"membername":"THOMPSON, PAUL, H","memberbranch":"default"},{"membername":"TIQUIN, JOHN, E","memberbranch":"default"},{"membername":"TITUS, ARTHUR","memberbranch":"default"},{"membername":"TORREY, AVERY, Z","memberbranch":"default"},{"membername":"TOWNSEND, EDWARD, J","memberbranch":"default"},{"membername":"TRIPP, ALWIN, B","memberbranch":"default"},{"membername":"TROXELL, HARRISON","memberbranch":"default"},{"membername":"VAN BUITEN, GARY","memberbranch":"default"},{"membername":"VAN HOUSEN, JOHN, L","memberbranch":"default"},{"membername":"VANDERLAAN, SAMUEL, A","memberbranch":"default"},{"membername":"VICKERS, BRADLEY","memberbranch":"default"},{"membername":"VINAL, JOHN, M","memberbranch":"default"},{"membername":"VOLK, PETER, J","memberbranch":"default"},{"membername":"VOLK, WILLIAM","memberbranch":"default"},{"membername":"VON DAUBER , JAMES, P","memberbranch":"default"},{"membername":"WACKFORD, JEFFERY, D","memberbranch":"default"},{"membername":"WAKKER, DAVID","memberbranch":"default"},{"membername":"WALKER, JOHN, D","memberbranch":"default"},{"membername":"WALKER, KEVIN, E","memberbranch":"default"},{"membername":"WALLING, LS","memberbranch":"default"},{"membername":"WEINMAN, JACK","memberbranch":"default"},{"membername":"WELLS, EVERT, B, JR","memberbranch":"default"},{"membername":"WERLAU, ARNOLD","memberbranch":"default"},{"membername":"WHALEY, GRANT, E","memberbranch":"default"},{"membername":"WHELEN, HOWARD","memberbranch":"default"},{"membername":"WHIPPLE, DOUGLAS","memberbranch":"default"},{"membername":"WHITE, MALCOLM","memberbranch":"default"},{"membername":"WHITNEY, BRUCE","memberbranch":"default"},{"membername":"WIERZBICKI, FRANK, C","memberbranch":"default"},{"membername":"WIGHTMAN, BRETT, L","memberbranch":"default"},{"membername":"WILCOX, GEORGE, I","memberbranch":"default"},{"membername":"WINKER, JOHN","memberbranch":"default"},{"membername":"WINTON, FLOYD, A","memberbranch":"default"},{"membername":"WOOD, NORVAL, H","memberbranch":"default"},{"membername":"YACANO, ROBERT","memberbranch":"default"},{"membername":"YODER, DAVID","memberbranch":"default"},{"membername":"YODER, JUSTEN, J","memberbranch":"default"},{"membername":"YOUNGS, GEORGE","memberbranch":"default"},{"membername":"ZAHER, WILLIAM","memberbranch":"default"},{"membername":"ZAIA, ANDREW","memberbranch":"default"},{"membername":"ZIENO, AUGUSTINE, B","memberbranch":"default"}];

var cardDeck;

var background;

var config;

var game;

function buildCardDeck() {
    // make sure our array was initialized and populated
    if (membersArray && membersArray.length > 0) {
        var result = [];
        for (var i = 0, len = membersArray.length; i < len; i++) {
            var memberName = membersArray[i].membername.trim().toUpperCase();
            var memberBranch = membersArray[i].memberbranch.replace(/\s+/g, '').toLowerCase();
            var cardHtml = `<div class="container-fluid">
                            
                            <div class="col-md shadow-sm p-4 bg-danger mx-auto">
                                <div class="card shadow-md bg-primary mx-auto" style="min-width: 250px; max-width: 250px;">
                                        <img
                                    class="card-img-top rounded-circle mx-auto"
                                    `;
            if (validBranchNames.includes(memberBranch)) {
                cardHtml += 'src="/assets/insignia_images/' + memberBranch + '/branch_seal.png"';
            } else {
                cardHtml += 'src="/assets/insignia_images/vfwdefault.png"';
            };
            cardHtml +=`
                alt="Branch Seal"
                style="width: 150px;"
            />
            <div class="card-body">
                <table class="table table-dark table-striped">
                <tr>
                    <th>
                    <strong> Name: </strong>
                    </th>
                </tr>
                <tr>
                    <td id="card-${i}-member-name">` + memberName + `</td>
                </tr>
                <tr>
                    <th><strong> Branch: </strong></th>
                </tr>
                <tr>
                    <td id="card-${i}-member-branch">` + memberBranch.toUpperCase() + `</td>
                </tr>
                <tr>
                    <th><strong> Grade / Rank: </strong></th>
                </tr>
                <tr>
                    <td id="card-${i}-member-rank">
                    UNKNOWN...
                    </td>
                </tr>
                <tr>
                    <th><strong> Status: </strong></th>
                </tr>
                <tr>
                    <td id="card-${i}-member-status">
                    UNKNOWN...
                    </td>
                </tr>
                </table>
            </div>
        
    </div>
    </div>
</div>`;
            result.push(cardHtml);
        };
        return result;
    }
    else {
        return null;
    };
};

function preload() {
    // this.load.html('nameform', '/assets/js/bootstrap.html');
    // this.load.image('bg', '/assets/flag_table_background.jpg');
    this.load.image('bg', '/assets/usa_flag_vector.svg');

    // create "card deck"
//    cardDeck = buildCardDeck();
/*     for (var i = 0; i < cardDeck.length; i++) {
        console.log(cardDeck[i]);
    }; */
};

function create() {

    /*
        setting camera bound to the same as the world bounds will keep the camera from showing
        blank canvas outside of the background image/
    */
    //this.cameras.main.setBounds(0, 0, 4000, 4000);
    //this.physics.world.setBounds(0, 0, 4000, 4000);
    /*
        background images is 500x500 world is 4000x4000
        This image does not scale well, another option
        would be to display it not scaled 4 times 0,0 0,500 500,0 500,500
    */
    // this.add.image(0, 0, 'bg').setOrigin(0).setScale(2);

    // var text = this.add.text(10, 10, 'Please login to play', { color: 'white', fontFamily: 'Arial', fontSize: '32px ' });

var div0 = document.createElement('div');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');

div0.innerHTML = cardDeck[0];
div1.innerHTML = cardDeck[1];
div2.innerHTML = cardDeck[2];
div3.innerHTML = cardDeck[3];

var element0 = this.add.dom(150, 300, div0);
var element1 = this.add.dom(400, 300, div1);
var element2 = this.add.dom(650, 300, div2);
var element3 = this.add.dom(900, 300, div3);

element0.setDepth(2).setScale(0.7);
element1.setDepth(2).setScale(0.7);
element2.setDepth(2).setScale(0.7);
element3.setDepth(2).setScale(0.7);

    this.tweens.add({
        targets: [ element0, element1, element2, element3 ],
        y: 600,
        angle: 200,
        duration: 3000,
        scaleX: 2,
        ease: 'Sine.easeInOut',
        //loop: -1,
        yoyo: true
    });

    // this.add.image(0, 0, 'bg').setOrigin(0).setScale(2);
    this.add.image(0, 0, 'bg').setOrigin(0).setScale(1.2);

    /*
    // import card deck 
    var x = 100;
    var y = 100;
    for (var i=0; i<10; i++) {
        window['element'+i] = this.add.dom(x, y).createFromHTML(cardDeck[i]);
        window['element'+i].setPerspective(800);
        window['element'+i].setScale(0.7);
        x += 4;
        y += 4;
    };
        element.addListener('click');
        element.on('click', function (event) {
            if (event.target.id === 'up') {
                var inputUsername = this.getChildByID('center');
                var inputPassword = this.getChildByID('down');
                console.log(inputUsername);
                console.log(inputPassword);
                //  Have they entered anything?
                if (inputUsername.innerText !== '' && inputPassword.innerText !== '') {
                    //  Turn off the click events
                    // this.removeListener('click');
                    //  Tween the login form out
                    this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3', hold: 3000, yoyo: true });
                    this.scene.tweens.add({
                        targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3', hold: 3000, yoyo: true,
                        onComplete: function () {
                            element.setVisible(true);
                        }
                    });
                    //  Populate the text with whatever they typed in as the username!
                    text.setText('Welcome ' + inputUsername.innerText + ' ' + inputPassword.innerText);
                }
                else {
                    //  Flash the prompt
                    this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
                }
            }
            else {
                console.log(event.target.id);
                // different actions to do according to element "id" property
                switch(event.target.id) {
                    case "right":
                        this.scene.tweens.add({
                            targets: element,
                            x: game.config.width - 150,
                            y: game.config.height / 2,
                            duration: 200,
                            ease: 'Power3'
                        });
                        break;
                    case "down":
                        this.scene.tweens.add({
                            targets: element,
                            x: game.config.width / 2,
                            y: game.config.height - 50,
                            duration: 200,
                            ease: 'Power3'
                        });
                        break;
                    case "left":
                        this.scene.tweens.add({
                            targets: element,
                            x: 150,
                            y: game.config.height / 2,
                            duration: 200,
                            ease: 'Power3'
                        });
                        break;
                    case "center":
                        this.scene.tweens.add({
                            targets: element,
                            x: game.config.width / 2,
                            y: game.config.height / 2,
                            duration: 200,
                            ease: 'Power3'
                        });
                        break;
                };
            };
        }); 
        this.tweens.add({
            targets: element,
            y: 150,
            duration: 3000,
            ease: 'Power3'
        });
        
    };
    */
};

/*

// TODO FROM HERE

1. Create General INIT() func to call things like buildCardDeck(), etc
2. Figure out how to initially hide game objects (ex obj.visible)
3. Figure out how to show game objects in tween - same tween, different?
4. Figure out how to recursively call tweens, with intermediate steps 
    between iterations
5. REM use of setInterval(spliceMe) function, move steps to own func
6. Call data refresh (step 5) func from recursive tweens to iteratively
    load data from our list in chunks - window.location.reload | .refresh
    once tmparr.length === 0 (for automatic data updates)

// NICE TO HAVES FROM HERE

7. Different transition effects (tween / anim) initial load and between?
    Examples: Like, show card "backface" (if possible) on deal?
8. Go to post and test on screen there for rest of development?
9. Find a way to eliminate the requirement for Android App? (AndrTV Browser)?
10. If not 9 - update Android App, sideload to TV, test - BECOMES MUST!

*/

// 27Jan2022 - NEXT TIME SEE ABOVE, START BELOW! DATA REFRESHING #1 PRIORITY!

this.cardDeck = this.buildCardDeck();

var member;

let tmparr = [...this.cardDeck];

setInterval(spliceMe, 5000);

function spliceMe() {
    if (tmparr.length > 0){
        member = tmparr.splice(0,4);
    } else {
        tmparr = [...cardDeck];
        member = tmparr.splice(0,4);
    };
    for (let i=0; i<member.length; i++) {
        console.log("idx=" + i + " " + JSON.stringify(member[i]));
    };
};

// FINALLY - set phaser config and start game once, once initialized

this.config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'phaser-example',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    // autoRound: true,
    dom: {
        createContainer: true
    },
    scene: {
        preload: preload,
        create: create
    }
};

this.game = new Phaser.Game(this.config);