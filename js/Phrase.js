/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.chars = this.phrase.split("");
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseDiv = document.getElementById("phrase");
    this.chars.map((char) => {
      if (char !== " ")
        phraseDiv.innerHTML += `<li class='hide letter ${char}'>${char}</li>`;
      else phraseDiv.innerHTML += `<li class='space'></li>`;
    }); 
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(input) {
    if (this.phrase.includes(input)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(input) {
    const getCorrectLetter = document.getElementsByClassName(input);
    for (let h = 0; h < getCorrectLetter.length; h++) {
      getCorrectLetter[h].classList.remove("hide");
      getCorrectLetter[h].classList.add("show");
    }
  }
}
