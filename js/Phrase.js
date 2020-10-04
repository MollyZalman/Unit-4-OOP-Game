/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor() {
        this.phrase = phrase;
        this.chars = this.phrase;
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        this.chars
            .map((char) => {
                if (char !== ' ') phraseDiv.innerHTML += `<li class='hide letter ${char}'>${char}</li>`;
                else phraseDiv.innerHTML += `<li class='space'></li>`;
            })
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {

    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) { 

    };



























}