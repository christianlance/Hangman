var easybtn = document.getElementById("easybtn");

easybtn.addEventListener("click", function(){
    var easyRequest = new XMLHttpRequest();
    easyRequest.open('GET', 'https://hangman-micro-service-bpblrjerwh.now.sh/?difficulty=easy')
    easyRequest.onload = function(){
        var easyData = JSON.parse(easyRequest.responseText);
        console.log(easyData);
    }; 
    easyRequest.send();
});
(function () {
    "use strict";
    var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages;

    function setup() {
        /* start config options */
        availableLetters = "abcdefghijklmnopqrstuvwxyz";
        lives = 5;
        words = [easyData];
        messages = {
            win: 'You win!',
            lose: 'Game over!',
            guessed: ' already guessed, please try again...',
            validLetter: 'Please enter a letter from A-Z'
        };
        /* end config options */

        lettersGuessed = lettersMatched = '';
        numLettersMatched = 0;

        /* choose a word */
        currentWord = words[Math.floor(Math.random() * words.length)];

        /* make #man and #output blank, create vars for later access */
        output = document.getElementById("output");
        man = document.getElementById("man");
        guessInput = document.getElementById("letter");

        man.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = '';

        document.getElementById("letter").value = '';

        /* make sure guess button is enabled */
        guessButton = document.getElementById("guess");
        guessInput.style.display = 'inline';
        guessButton.style.display = 'inline';

        /* set up display of letters in current word */
        letters = document.getElementById("letters");
        letters.innerHTML = '<li class="current-word">Current word:</li>';

        var letter, i;
        for (i = 0; i < currentWord.length; i++) {
            letter = '<li class="letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend', letter);
        }
    }
