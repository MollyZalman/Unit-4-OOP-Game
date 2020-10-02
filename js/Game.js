/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 const Game = {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }
 
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase("Eat, drink, and be scary"),
            new Phrase("Trick or treat"),
            new Phrase("Ghouls just want to have fun"),
            new Phrase("This is Halloween"),
            new Phrase("Hocus Pocus"),
            new Phrase("I put a spell on you"),
            new Phrase("Pick your poisen"),
            new Phrase("Witch, please"),
        ];
        return phrases;
    };
 
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }
 
 
 
 
 
 
 
 





};