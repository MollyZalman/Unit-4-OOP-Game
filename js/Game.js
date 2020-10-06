/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
         this.keyboardAvailable = false;
     }
 
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase("Eat drink and be scary"),
            new Phrase("Trick or treat"),
            new Phrase("Ghouls just want to have fun"),
            new Phrase("This is Halloween"),
            new Phrase("Hocus Pocus"),
            new Phrase("I put a spell on you"),
            new Phrase("Pick your poison"),
            new Phrase("Witch please"),
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
    * Clears game and restarts
    */
    startGame() {
		document.querySelectorAll('.key').forEach(key => {
			key.disabled = false;
			key.classList = 'key';
        });
        document.querySelectorAll('.letter').forEach(letter => letter.remove());
		document.querySelectorAll('.space').forEach(space => space.remove());
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
		document.querySelectorAll('.tries img')
		    .forEach(heart => heart.setAttribute("src", "images/liveHeart.png"));
		document.querySelector("#overlay").style.display = "none";
		document.querySelector("#overlay").classList = '';
    };

    /**
    * Handles onscreen keyboard button clicks (correct/incorrect keys)
    * Checks if the player has won or not while accessing css styles
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) { 
        if (this.activePhrase.checkLetter(button.innerHTML))  { 
            button.disabled = true;  
            button.classList = "chosen";
            this.activePhrase.showMatchedLetter(button.innerHTML);
            const hasWon = this.checkForWin();
            if (hasWon) { 
                this.gameOver(true)
            }
        //If the letter doesn't match...
        } else if (!this.activePhrase.checkLetter(button.innerHTML)) {
            button.disabled = true;
            button.classList = "wrong"; 
            //Removes a life :/
            this.removeLife(this.missed); 
        }
        };
 
    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const letters = document.querySelectorAll('.letter').length;
        const shown = document.querySelectorAll('.show').length;
            return letters === shown ? true: false;
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
            gameOverMessage.style.color = 'white';
            gameOverMessage.innerHTML += `You have survived... for now`
        } else {
            overlay.classList.add('lose')
            gameOverMessage.style.color = 'white';
            gameOverMessage.innerHTML +=
                `You failed to survive. <br>
                The phrase was: "${this.activePhrase.phrase}"`
        };
        const reset = document.getElementById('btn__reset');
        reset.innerHTML = 'Restart Game';
        reset.addEventListener("click", () => this.gameReset());
        this.keyboardAvailable = false;
    };

    /**
    * Resets the game board, clearing the game from before 
    * Accesses the phrase container, the keys, and the hearts
    */
    gameReset() { 
        let phraseUl = document.querySelector('ul'); 
        let qwertyKeys = document.querySelectorAll('#qwerty button');
        const lives = document.getElementsByTagName("img"); 

        phraseUl.innerHTML = "";
        this.missed = 0;

        if (qwertyKeys.length ) {
            for (let key of qwertyKeys) {
                key.className = "key";
                key.disabled = false;
            }
        }

        if (lives.length) {
            for (let life of lives) {
                life.src = "images/liveHeart.png";
            }
        }
    };
};