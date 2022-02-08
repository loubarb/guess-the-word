// unordered list where players guessed letters appear
const guessedLettersElement = document.querySelector(".guessed-letters");
// Guess! button
const button = document.querySelector(".guess");
// text input field
const letterInput = document.querySelector(".letter");
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
    const yourGuess = letterInput.value;
    // make sure single letter
    const goodGuess = playersInput(yourGuess);
    if (goodGuess) {
        makeGuess(yourGuess);
    };
    // empty input value after hitting guess button
    letterInput.value = "";
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
        showGuessedLetters();
        wordUpdateProgress(guessedLetters);
    }
};

// function to display guessed letters
const showGuessedLetters = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

// function to update word in progress
const wordUpdateProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    // split("") splits word string into array so letter can appear in guessedLetters array
    const wordArray = wordUpper.split("");
    console.log(wordArray);
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    wordInProgress.innerText = revealWord.join("");
    wonGame();
};

// function to check if player won
const wonGame = function () {
    if (wordInProgress.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
}
