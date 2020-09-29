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
         this.winner = false;
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
            {phrase: 'Eat drink and be scary'},
            {phrase: 'Sticks and stones may break my bones'},
            {phrase: 'Ghouls just want to have fun'},
            {phrase: 'Witch please'},
            {phrase: 'Double double toil and trouble'},
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
    * Starts the game by choosing a phrase and displaying it on the web page
    * @startGameDisplay Displays the game
    * @chosenPhrase Gets a random phrase
    * @phrase The phrase that was chosen
    */
    startGame() {
        const startGameDisplay = document.getElementById('overlay');
        const chosenPhrase = this.getRandomPhrase();
        const phrase = new Phrase(chosenPhrase.phrase);
        startGameDisplay.style.display ='none';

        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    };

    /**
    * Checks if all correct letters are displayed 
    * @correctLetters Letters that make up the chosen phrase
    */
    checkForWin() {
		let correctLetters = document.querySelectorAll(".hide");
		if (correctLetters.length === 0) {
			this.winner = true;
			this.gameOver()
		}
	}

    /**
    * Removes a life if a player proposes a letter that's incorrect and keeps track of how many lives a player has left
    * @heart Accesses the hearts
    */
    removeLife(letter) {
        this.missed += 1;

        const heartLog = this.missed - 1;
        const lives = document.getElementsByClassName('tries');
        const displayHeart = lives[heartLog].firstElementChild;
        displayHeart.src = "images/lostHeart.png";
        letter.classList.add("wrong");
        letter.disabled = true;
        };

    /**
    * Displays a message if you win or lose, Halloween style of course
    * @winner The game has been won
    */
    gameOver(winner) {
        const blockOverlay = document.getElementById('overlay');
        blockOverlay.style.display = 'block';
    
        const message = document.getElementById('game-over-message');
    
        winner ? message.textContent = "You have survived 🎃! Happy Halloween 👻" : message.textContent = "You failed to stay alive 👹";
        };

    /**
    * Starts the game by choosing a phrase and displaying it on the web page
    * @button 
    */
    handleInteraction(button){
        button.disabled = true;
        this.activePhrase.checkLetter(button.textContent);

        if (this.activePhrase.checkLetter(button.textContent) == false){
            button.className = 'wrong';
                this.removeLife();
        }else{
            button.className = 'chosen';
            const selectedPhrase = game.activePhrase.phrase.toString().split('');

            selectedPhrase.forEach(char => {
                if (button.textContent == char){
                    this.activePhrase.showMatchedLetter(char);
                }
            })
        }
        game.checkForWin(); 
        
        if (game.checkForWin()){
            this.gameOver(true);
        }
    };



};