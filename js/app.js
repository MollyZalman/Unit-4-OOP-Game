/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
* Event listener to start the game
* Reveals under overlay
*/
let game;
const button = document.getElementById('btn__reset');
button.addEventListener('click', () => {
    game = new Game(game);
    game.startGame();
});