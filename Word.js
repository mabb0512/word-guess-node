var Letter = require("./Letter.js");

function Word (word) {

    this.letters = [];
    this.wordToguess = word;
    this.wordArray = this.wordToguess.split("");

    this.wordArray.forEach(element => {
        var letter = new Letter(element);
        this.letters.push(letter);
    });

    this.showString = function () {

        var showLetter = "";
        this.letters.forEach(element => {
            showLetter = showLetter + element.getDisplay() + " ";
        });

        console.log(showLetter);
    }

    this.checkTyped = function (letter) {

        var found = 0;
        this.letters.forEach(element => {
            
            if (element.letterGuessed == false && element.checkLetter(letter) == true){
                element.letterGuessed = true;
                found = found + 1;
            }
        });

        return found;
    }
}

module.exports = Word;