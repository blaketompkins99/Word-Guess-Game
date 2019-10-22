var words = ["BIRD", "CARTER", "ANTETOKOUNMPO", "HARDEN", "JORDAN", "LEBRON", "WESTBROOK", "YOUNG"];
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var lettersGuessed = 0;
var guesses = [];
var computerWord;
var winCounter = 0;
var lossCounter = 0;
var guessesRemaining = 9;
var letter = "";
var underscore = "";

function reset() {
    lettersGuessed = 0;
    guesses = [];
    guessesRemaining = 9;
    letter = "";
    underscore = "";
    computerWord = "";
    document.getElementById("wrong-guesses").textContent = guesses;
    document.getElementById("guesses-left").textContent = guessesRemaining;
    initialize();
}

function winner() {
    winCounter++;
    document.getElementById("win-counter").textContent = winCounter;
    alert("YOU WIN!");
}

function loser() {
    lossCounter++
    document.getElementById("loss-counter").textContent = lossCounter;
    alert("YOU SUCK!!");
}

function initialize() {
    // Picks random word
    computerWord = words[Math.floor(Math.random() * words.length)];
    for (i = 0; i < computerWord.length; i++) {
        underscore = underscore + "_ ";
        document.getElementById("word-blanks").textContent = underscore;
    }
    console.log(computerWord);
    // Captures user letter
    document.onkeypress = function (event) {
        letter = (String.fromCharCode(event.keyCode).toUpperCase());
        // Checks to make letter is a new letter
        if (guesses.indexOf(letter) > -1) {
            alert("LOSES AT THE BUZZER!")
        } else {
            guesses.push(letter);
            console.log(guesses);
        }
        // Checks user input with the selected word
        if (computerWord.indexOf(letter) > -1) {
            for (i = 0; i < computerWord.length; i++) {
                // Checks if letter is correct
                if (computerWord.charAt(i) == letter) {
                    var splitWord = underscore.split(" ");
                    console.log("It works");
                    lettersGuessed++;
                    console.log(lettersGuessed);
                    splitWord[i] = letter;
                    console.log(underscore[i]);
                    document.getElementById("word-blanks").textContent = splitWord.join(" ");
                    underscore = splitWord.join(" ");
                    if (lettersGuessed == computerWord.length) {
                        winner();
                        reset();
                    }
                }
            }
            // Checks if guesses are wrong
        } else {
            for(j=8; j <= 0; j--) { 
                if(guesses == "_") {
                    guesses[j] = letter;
                }
            }
            document.getElementById("wrong-guesses").textContent = guesses;
            guessesRemaining--;
            document.getElementById("guesses-left").textContent = guessesRemaining;
            if (guessesRemaining <= 0) {
                loser();
                reset();
            }
        }
    }
}

initialize();