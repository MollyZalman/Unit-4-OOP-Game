/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
* Event listener to start the game
* Reveals under overlay
*/
let game;
const reset = document.getElementById('btn__reset');
reset.addEventListener('click', () => {
    game = new Game(game);
    game.startGame();
});

/**
* Event listener to make the keys work
* Under overlay
*/
const keys = document.getElementsByClassName('key');
    for (let h = 0; h < keys.length; h ++) {
    keys[h].addEventListener("click", (e) => {
    game.handleInteraction(e.target);
    });
}; 









