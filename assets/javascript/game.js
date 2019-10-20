
// Setting Variables
var players = ["BIRD", "CARTER", "ANTETOKOUNMPO", "HARDEN", "JORDAN", "LEBRON", "WESTBROOK", "YOUNG"];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
"U", "V", "W", "X", "Y", "Z"];
var guessedLetters = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_",
"_", "_", "_", "_", "_", "_"]
var wrongGuesses = "";
var wins = 0;
var remainingGuesses = 12;
var underscore = "";

// Function for generating the word
function newGame (){

    // Resets Variables
    underscore = "";
    remainingGuesses = 12;

    // Picks random player from players list
    var word = players[Math.floor(Math.random(players) * 8)];

    // Loop to set the number of underscores for the word
    for(i=0; i < word.length; i++) {
        underscore = underscore + "_ ";
        document.getElementById("hiddenWord").textContent = underscore;
    }
}

// Function for updating the score
function scoreUpdate() {
    wins += 1;
    document.getElementById("winCounter").textContent = wins;
}

// Function updating remaining guesses
function guessesLeft() {
    remainingGuesses--;
    document.getElementById("guessCounter").textContent = remainingGuesses;
}

newGame();

if(underscore === word) {
    scoreUpdate();
    newGame();
} else if (remainingGuesses === 0){
    newGame();
} else {
  
    document.onkeyup = function(event) {
        // Variable for the guesses
        var userGuess = event.key.toUpperCase();

        for (i=0; i < word.length(); i++) {
            if(userGuess === word.charAt(i) && underscore.charAt(i) === "_") {
                underscore.charAt(i) = userGuess;
                document.getElementById("hiddenWord").textContent = underscore;
            } else {
                if(userGuess === letters[i] && guessedLetters[i] === "_"){
                    guessedLetters[i] = userGuess;
                    wrongGuesses += guessedLetters + " ";
                    document.getElementById("guessedLetters").textContent = guessedLetters;
                    guessesLeft();
                }
            }
        }
    }
}