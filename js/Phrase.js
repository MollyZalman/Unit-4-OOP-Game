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
    const ul = document.querySelector('#phrase ul');
    let splitPhrase = this.phrase.split('');
    ul.innerHTML = '';


    for (let i=0; i<this.phrase.length; i++) {
        let li = document.createElement('LI');
        li.innerHTML = splitPhrase[i];
        ul.appendChild(li);

        if (this.phrase[i] == ' ') {
            li.classList = 'space';
        } else if (this.phrase[i] == splitPhrase[i]) {
            li.classList = 'hide letter';
        }
       }
   }

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