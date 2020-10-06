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
* Event listener to make the keys work when they are clicked with a mouse
* Under overlay
*/
const keys = document.getElementsByClassName('key');
    for (let h = 0; h < keys.length; h ++) {
    keys[h].addEventListener("click", (e) => {
    game.handleInteraction(e.target);
    });
}; 

/**
* Event listener to make the keys worked when they are pressed on an actual keyboard
* If the overlay isn't showing, and if the key pressed matches a key from the phrase, call that key
*/
const overlay = document.getElementById("overlay");
document.addEventListener('keydown', (e) => {
  if (overlay.style.display === 'none') {
      for (let h = 0; h < keys.length; h++) {
          if (e.key === keys[h].textContent ) {
              game.handleInteraction(keys[h])
          }
      }
  }
})





