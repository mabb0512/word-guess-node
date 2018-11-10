var inquirer = require("inquirer");
var randomWords = require("random-words");
var Word = require("./Word.js");
var word = new Word(randomWords());

var guessesLeft = 10;
var gameOver = false; 
var lettersGuessed = [];
var leftToGuess = word.wordToguess.length;

function checkLetter(letterTyped) {

    var letterGuessed = false;

    if (letterTyped.length == 1) {

        if (lettersGuessed.indexOf(letterTyped) == -1)
            lettersGuessed.push(letterTyped);

        else {
            console.log("This letter has already been used! Try another one..");
            console.log("You have " + guessesLeft + " guesses left");
            letterGuessed = true;
        }

        var found = word.checkTyped(letterTyped);
        console.log(found);

        if (found > 0) {
            console.log (found + " letters found!");
            leftToGuess = leftToGuess - found;
        }

        else if (!letterGuessed) {

            guessesLeft = guessesLeft - 1;
            console.log("Incorrect you have " + guessesLeft + " guesses left");
        }

        if (leftToGuess == 0) {

            gameOver = true;
            word.showString();
            console.log("You win!");
        }

        if (guessesLeft == 0) {
            
            console.log("You lose! Try again. The word to guess was " + word.wordToguess);
            gameOver = true;
        }
    }

    else {
        console.log("please only type one letter");
    }
}

function getUserInput() {

    word.showString();

    inquirer.prompt([
        {
            type: "input",
            name: "letter",
            message: "Guess a letter"
        }
    ]).then(function(response){

        checkLetter(response.letter);

        if(!gameOver){
            getUserInput();
        }
    })
}

getUserInput();

