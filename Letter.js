function Letter (letter) {

    this.letter = letter;
    this.letterGuessed = false;
    this.getDisplay = function (){
        if (!this.letterGuessed)
            return "_";
        else
            return this.letter;
    };
    this.checkLetter = function(letterTyped) {
        if (letterTyped == this.letter) {
            this.letterGuessed = true;
            return true;
        }
        else
            return false;
    }
}

module.exports = {
    Letter: Letter
}
