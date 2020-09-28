/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /**
 * Makes the Start Game Button Interactive
 * @game New game
 * @startGame Starts new game
 */

 const game = new Game();
 const startGame = document.getElementById('btn__reset').addEventListener('click', () => {
     game.startGame();
 });

/**
 * Allows keyboard to start game and handle Interactions
 * @key keys on the keyboard, also known as letters
 */

const keys = document.getElementById('querty');
keys.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

