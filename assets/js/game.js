/*

// Use the Phaser3 GameDev Library with DOMElements!
// Src:  https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
// Docs: https://newdocs.phaser.io/docs/3.55.2/Phaser.GameObjects.DOMElement
// Git:  https://github.com/photonstorm/phaser3-examples

// Basically, idea will be to preload an array of DOMElement objects using our Life Members data, then iteratively display, animate, destroy them as they cross
// our "world boundaries"! This should allow you to do what you have been trying to do (and MUCH more) with simple CSS transitions, etc.
*/

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    dom: {
        createContainer: true
    },
    scene: {
        preload: preload,
        create: create
    }
};

var element;

var game = new Phaser.Game(config);

function preload() {
    this.load.html('nameform', '/assets/js/bootstrap.html');
    this.load.image('pic', '/assets/flag_table_background.jpg');
}

function create() {
    this.add.image(400, 300, 'pic');

    var text = this.add.text(10, 10, 'Please login to play', { color: 'white', fontFamily: 'Arial', fontSize: '32px ' });

    var element = this.add.dom(400, 600).createFromCache('nameform');

    element.setPerspective(800);

    element.setScale(0.7);

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
                this.removeListener('click');

                //  Tween the login form out
                this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

                this.scene.tweens.add({
                    targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
                    onComplete: function () {
                        element.setVisible(false);
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
                            
            //  Flash the prompt
            this.scene.tweens.add({ targets: element, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
        }

    });

    this.tweens.add({
        targets: element,
        y: 150,
        duration: 3000,
        ease: 'Power3'
    });
}