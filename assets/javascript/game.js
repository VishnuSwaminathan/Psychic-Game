$(document).ready(function() {
  var randLetterArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  var randLetter =
    randLetterArray[Math.floor(Math.random() * randLetterArray.length)];
  console.log(randLetter);

  var wins = 1;
  var wrongGuesses = 9;
  var losses = 1;
  document.onkeyup = function(event) {
    var letterGuess = event.key.toLowerCase();
    if (letterGuess == randLetter) {
      alert('You won!');
      $('#wins').html(wins++);
      $('#guessesLeft').html('9');
      $('#guesses').html('');
      randLetter =
        randLetterArray[Math.floor(Math.random() * randLetterArray.length)];
      console.log(randLetter);
    } else {
      wrongGuesses--;
      $('#guessesLeft').html(wrongGuesses);
      $('#guesses').prepend(letterGuess);
      if (wrongGuesses === 0) {
        $('#losses').html(losses++);
        alert('You lost!');
        wrongGuesses = 9;
        $('#guessesLeft').html('9');
        $('#guesses').html('');
        randLetter =
          randLetterArray[Math.floor(Math.random() * randLetterArray.length)];
        console.log(randLetter);
      }
    }
  };
});
