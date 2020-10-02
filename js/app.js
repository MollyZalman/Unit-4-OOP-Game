/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /**
 * Makes the Start Game Button Interactive
 * @game New game
 * @startGame Starts new game
 */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null; 
    }

/**
* When a player clicks a letter on the keyboard, this will keep track of which key was pressed
* @key keys on the keyboard, also known as letters
*/
document.querySelector("#qwerty").addEventListener('click', (e) => {
   let qwertyTarget = e.target;
   if (qwertyTarget.tagName === 'BUTTON') {
	   letter = qwertyTarget;
	   letter.disabled = true;
	   //Cannot read property 'firstElementChild' of undefined
	   game.handleInteraction(letter);
   }
})

document.addEventListener('keyup', (e) => {
   document.querySelectorAll(".key").forEach((key) => {
	   const letter = key;
	   if (key.textContent === e.key && key.disabled === false) {
		   game.handleInteraction(letter)
		   letter.disabled = true;
	   } else if (key.textContent === e.key && key.disabled === true) {
		   }
	   })
   })
});