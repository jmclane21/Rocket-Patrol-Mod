/**
 * Name: Jackson McLane
 * Mod Title: Rocket Patrol: Now with aim hacks!
 * Approx Time: 10hrs?
 * Mods Implemented:
 *      Allow the player to control the Rocket after it's fired                                         (1)
 *      Implement mouse control for player movement and left mouse click to fire                        (5)
 *      Display the time remaining (in seconds) on the screen                                           (3)
 *      Track a high score that persists across scenes and display it in the UI                         (1)
 *      Implement a new timing/scoring mechanism that adds time to the clock for 
 *      successful hits and subtracts time for misses                                                   (5)
 *      Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (5)
 * 
 * Timer Explanation: I converted the given clock variable (a delayed call) and made it have global scope.
 *      Then in Rocket.js, every time the rocket resets itself (the player missed), it adds increases the elapsed
 *      time in the clock, reducing the amount of time left. Additionally in shipExplode, I decreased the elapsed
 *      time, increasing the amount of time left.
 * 
 * Sources:
 * Emitter Event Example
 *      https://github.com/phaserjs/examples/blob/master/public/src/game%20objects/particle%20emitter/emitter%20events.js
 * 
 * Mouse Click Example
 *      https://labs.phaser.io/edit.html?src=src\input\mouse\check%20button%20released.js
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

//reserve the global clock
let clock

//set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3