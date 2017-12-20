//CONSTRUCTOR FUNCTION FOR WORD.JS
//Instructions:
//word.js should contain all of the methods which will check the letters guessed vs the random word selected.
//Requesting Letter.js file 
var Letter = require('./letter.js');

var Word = function(words){
	//Variables with an empty array.
	this.words = words;
	this.guessedWord = [];
	this.youWin = false;
	this.guesses = [];

	//Method to grab the letter in the word.
	this.grabLetters = function(){
		for(var i = 0; i <this.words.length; i++){
			var theNewLetter = new Letter(this.words[i]);
			this.guessedWord.push(theNewLetter);

		}
	}
	this.grabLetters();

	this.foundIt = function(guessLetter){
		for(var i = 0; i <this.guesses.length; i++){
			if(guessLetter == this.guesses[i]){
				return true;
			}
		}
		console.log(guessLetter);
		var added = false;

		this.guesses.push(guessLetter);
		//console.log("size:",this.guessedWord.length);
		for(var i = 0; i <this.guessedWord.length;i++){
			//console.log("i:", i);
			//console.log("guessedWord letter: ", this.guessedWord[i].theLetters)
			if(this.guessedWord[i].letterin(guessLetter)){
				this.guessedWord[i].showsLetter = true;
				added = true;
			} 
		}
		return added;

	}
	// this.foundIt();



 	this.comparingWords = function(){
 		for(var i = 0; i < this.words.length; i++){
 			// console.log("secret letter:", this.words.charAt(i));
 			// console.log("letters:",this.guessedWord[i].current);
 			if(this.words.charAt(i) != this.guessedWord[i].current){
 				return false;
 			}

 		}
 				return true;
 	}
 	// this.comparingWords();


	this.display = function(){
		var emptyString = "";
			
		for(var i = 0; i <this.guessedWord.length; i++){
			emptyString += this.guessedWord[i].current + " ";
		}
		return emptyString;
	}
	// this.display();
} 
module.exports = Word;
