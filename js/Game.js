/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /**
  * Initializes missed, phrases, and activePhrase
  */
 class Game {
     constructor () {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }


/**
 * Creates phrases to display in the game
 * @return A list of different phrases
 */
    createPhrases () {
        const phrases = [
            {phrase: 'Trick or treat'},
            {phrase: 'Stop in for a spell'},
            {phrase: 'Doom and gloom'},
            {phrase: 'Eat, drink, and be scary'},
            {phrase: 'Sticks and stones may break my bones'},
            {phrase: 'Ghouls just want to have fun'},
            {phrase: 'Witch, please'},
            {phrase: 'Double, double toil and trouble'},
            {phrase: 'I put a spell on you because you’re mine'}
        ]
        return phrases;
    };

    /**
    * Picks a phrase from the array above
    * @randomPhrase Generates a random phrase
    */

   getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomPhrase];
   };

/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        const startGameDisplay = document.getElementById('overlay');
        const chosenPhrase = this.getRandomPhrase();
        const phrase = new Phrase(chosenPhrase.phrase);
        startGameDisplay.style.display ='none';

        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    };
};