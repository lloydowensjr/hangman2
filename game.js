//CONSTRUCTOR FUNCTION FOR GAME.JS
//Instruction:
//Your game.js file will randomly select a word for the player.
var Word = require("./word.js");


var Game = function(){
	this.secretWords = ["wordplay","poetry","lyrics","wordsmith","author","writer","poet"];

	this.randomWord = this.secretWords[ Math.floor(Math.random() * this.secretWords.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();
	// console.log(hangMan.randomWord);

module.exports = Game;