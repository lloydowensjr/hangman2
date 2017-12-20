//CONSTRUCTOR FUNCTION FOR LETTER.JS
//Instructions:
//Letter.js Should control whether or not a letter appears as a "_" or as itself on-screen.
//Accessing the Game random words.
//=====================================================================================
var Letter = function(letrs){

	this.current = "_"
	this.theLetters = letrs;
	//letter appears
	this.showsLetter = false;
	this.letterin = function(letter){
		if(this.theLetters == letter){
			this.current = this.theLetters; 
			return true;
		}
			return false;
	}
	//Method that will tell us if the letter appears or if "_" will appear.
	this.letterShows = function(){
		return this.current;
	}
};

module.exports = Letter;