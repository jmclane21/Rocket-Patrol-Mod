/**
 * Name: Jackson McLane
 * Mod Title:
 * Approx Time: 9pm-
 * Mods Implemented:
 *      Allow the player to control the Rocket after it's fired (1)
 *      Implement mouse control for player movement and left mouse click to fire (5)
 *      
 */


let config  = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
game.config.highScore = 0;
//reserved keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT, mouse

//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3