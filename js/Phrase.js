/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const Phrase = {
    constructor() {
        this.phrase = phrase.toLowerCase();
        this.chars = this.phrase.split('');
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





























}