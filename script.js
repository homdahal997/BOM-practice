// Our random number generator
function randomNum(max) {
    return Math.floor(Math.random() * max);
}
// create a random number and store it in variable correctAnswer
const correctAnswer = randomNum(100);
let maxGuesses = 5;
// Log the correct answer for our eyes
console.log(correctAnswer);
let continueGame = true;
do {
    // If user has run out of guesses, run this block and break out of the loop
    if (!maxGuesses) {
        alert("You've run out of guesses :(");
        break;
    }
    // Ask user for their guess and store it in userAnswer
    let userAnswer = prompt("Guess a number 0 - 100");
    // If userAnswer does not equal correctAnswer tell them higher or lower
    if (userAnswer !== correctAnswer) {
        // If userAnswer less than correctAnswer tell the user to go higher
        if (userAnswer < correctAnswer) {
            alert("Too low, go Higher!");
            // If userAnswer is greater than correctAnswer tell the user to go lower
        } else if (userAnswer > correctAnswer) {
            alert("Too high, go Lower");
        }
        // If user answer is incorrect, decrease their number of guesses left by 1
        maxGuesses--;
    }
    // If userAnswer is equal to the correctAnswer then alert them that they have won!
    if (parseInt(userAnswer) === correctAnswer) {
        alert("Congratulations, Your answer is correct!");
        // Stop the game
        continueGame = false;
    }
} while (continueGame);