// TODO: Create global variables
        var correctLetter = document.querySelector(".word-container");

        var abcArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var wordArray = ["giraffe", "shark", "eagle"];
        var guess = [];
        

 // TODO: Create start-app function

        function playGame() {

            for(var i = 0; i < wordArray.length; i++) {
               var randomIndex = Math.floor(Math.random()*wordArray.length);
               var randomWord = wordArray[randomIndex];
            };
            console.log(randomWord);
        }

        playGame();
      


// TODO: Store guesses
// TODO: Render guesses
// TODO: Watch for click events
