//CONSTRUCTOR FUNCTION
//Instruction:
//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 10;

	prompt.start(); //starting the prompt
	letTheGameBegin(userGuess);
//=====================================================================================
		function letTheGameBegin(guesses){
			console.log("Guesses left: " + guesses);
			if(hangmanGame.currentWord.comparingWords() == true){
				console.log("You win");
				return;
			}
			//if the user is out of gusses!
			if(guesses <= 0){
				console.log("Game Over!");
				return;
			}

		// will display the "_" and the number of spaces in the game.
		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
		//compares the letter from secretword and the letter typed.
		if(hangmanGame.currentWord.foundIt(result.theGuess) == false){
			guesses --;
		}
		letTheGameBegin(guesses);

	});
}