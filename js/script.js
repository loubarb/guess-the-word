// unordered list where players guessed letters appear
const guessedLetters = document.querySelector(".guessed-letters");
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
    // capture users input value
    const yourGuess = letter.value;
    console.log(yourGuess);
    // empty input value after hitting guess button
    letter.value = "";
});
