
// Setting Variables
var players = ["BIRD", "CARTER", "ANTETOKOUNMPO", "HARDEN", "JORDAN", "LEBRON", "WESTBROOK", "YOUNG"];

var guessLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
"U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var remainingGuesses = 12;

// Function for generating the word
function newWord (){

    // Picks random player from players list
    var word = players[Math.floor(Math.random(players) * 8) + 1];

    // Loop to set the number of underscores for the word
    for(i=0; i < word.length; i++) {
        var underscore = document.getElementById("hiddenWord");
        underscore.textContent += "_ ";
    }
}

// Function for updating the score
function scoreUpdate() {
    wins += 1;
    document.getElementById("winCounter").textContent = wins;
}

// Function updating remaining guesses
function guessesLeft() {
    document.getElementById("guessCounter").append = remainingGuesses;
}

newWord();

// document.onkeyup()

for (i=0; i > remainingGuesses; remainingGuesses--) {
    
    document.onkeyup = function(event) {
        // Variable for the guesses
        var userGuess = event.key.toUpperCase();
        if(userGuess === word) {
            remainingGuesses += 1;
            guessesLeft();
        }

    }
}







// console.log(word);


