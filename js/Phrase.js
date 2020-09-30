/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * Initial set up for Phrase class
  * @phrase Represents phrases in the game
  */
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

 /**
 * Displays a phrase
 * @letters Represents keys on the keyboard
 */
addPhraseToDisplay() {
    const letters = this.phrase.toString().split('');
    letters.forEach(letters => {
        let li = document.createElement("LI");
        li.innerHTML = `${letters}`;
           if (letters === ' ') {
               li.setAttribute('class', 'space');    
           } else {
               li.setAttribute('class', `hide letter ${letters}`);
           }
        document.querySelector('ul').appendChild(li);   
    });
   };

 /**
 * Checks if the letter selected is in the phrase
 * @letter This is the letter the game is checking
 */
 checkLetter(letter) {
     const secretPhrase = game.activePhrase.phrase.toString().split('');
     let isMatch = 0;
     secretPhrase.forEach(char => {
         if (letter === char) {
             isMatch += 1;
         }
     });
     if (isMatch >= 1) {
         return true;
     } else {
         return false;
     }
 };

/**
* If a match is found, the correct letter displays in the phrase
* @showMatchedLetter Correct letter
*/

   showMatchedLetter (letter) {
       const matchedLetters = document.querySelectorAll('.letter');
       for (let h = 0; h < matchedLetters.length; h++) {
           if (matchedLetters[h].innerHTML === letter) {
               matchedLetters[h].classList.replace('hide', 'show');
           }
       }
   };
};