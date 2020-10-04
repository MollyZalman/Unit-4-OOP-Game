/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
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
            new Phrase("Pick your poison"),
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
 
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        let overLay = (document.querySelector("#overlay").style.display = "none");
		overLay;

		const getPhrase = game.getRandomPhrase();
		const showPhrase = new Phrase(getPhrase.phrase);

		showPhrase.addPhraseToDisplay();
		this.activePhrase = showPhrase;
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) { //method that handles each keyboard selection based on whether it is correct or not.

        };
 
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const letters = document.querySelectorAll('.letter').length;
        const shown = document.querySelectorAll('.show').length;
            if (letters == shown) {
                return true;
            } else {
                return false;
            }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
		this.missed += 1;
		const lives = document.querySelector(
			'img[src="images/liveHeart.png"]'
		);
		lives.src = "images/lostHeart.png";
		if (this.missed === 5) {
			this.gameOver(false);
		}
	}
    };

    /**
    * Displays game over message, reveals under overlay, and disables the keyboard
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver (gameWon) {
        const gameOverMessage = document.querySelector('#game-over-message');
        gameOverMessage.innerHTML = '';
        overlay.style.display = 'flex';
        overlay.classList.remove('win', 'lose');
        if (gameWon) {
            overlay.classList.add('win')
            gameOverMessage.innerHTML += `You have survived 🤡... for now 👹`
        } else {
            overlay.classList.add('lose')
            gameOverMessage.innerHTML +=
                `You failed to survive 👻, <br>
                The phrase was: "${this.activePhrase.phrase}"`
        };
        reset.innerHTML = 'Restart Game';
        this.isAvailable = false;
    };
 
 
 
 
 





};