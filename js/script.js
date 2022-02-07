// unordered list where players guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");
// Guess! button
const button = document.querySelector(".guess");
// text input field
const letter = document.querySelector(".letter");
// paragraph where word appears
const wordInProgress = document.querySelector(".word-in-progress");
// paragraph where remaining guesses display
const remainingGuesses = document.querySelector(".remaining");
// span inside paragraph where remaining guesses display
const remainingNumber = document.querySelector(".remaining span");
// paragraph where messages appear when player guesses a letter
const message = document.querySelector(".message");
// hidden button that appears to play again
const playAgain = document.querySelector(".play-again");
// starting word for testing
const word = "mangolia";

const guessedLetters = [];

// function to update word-in-progress with ● symbol for each letter of the word
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

// event listener for button
button.addEventListener("click", function (e) {
    // prevent reloading behavior when clicking button
    e.preventDefault();
    message.innerText = "";
    // capture users input value
    const yourGuess = letter.value;
    // make sure single letter
    const goodGuess = playersInput(yourGuess);
    if (goodGuess) {
        makeGuess(yourGuess);
    };
    // empty input value after hitting guess button
    letter.value = "";
});

// function to check player input
const playersInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter";
    } else if (input.length >= 2) {
        message.innerText = "Please enter 1 letter at a time";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Only letters are accepted";
    } else {
        return input;
    }
};

// function to capture input
const makeGuess = function (yourGuess) {
    yourGuess = yourGuess.toUpperCase();
    if (guessedLetters.includes(yourGuess)) {
        message.innerText = "You already guessed that letter";
    } else {
        guessedLetters.push(yourGuess);
        console.log(guessedLetters);
    }
};