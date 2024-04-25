 # Random Number Guessing Game

This is a simple random number guessing game implemented in JavaScript. The game generates a random number between 0 and 100 and the player has to guess it.

## How it works

1. The game starts by generating a random number using the `randomNum` function. This number is stored in the `correctAnswer` variable.

```javascript
function randomNum(max) {
    return Math.floor(Math.random() * max);
}
const correctAnswer = randomNum(100);
```

2. The player is given a maximum of 5 guesses to find the correct number.

```javascript
let maxGuesses = 5;
```

3. The game then enters a loop where it will continue to ask the player for their guess until they either guess the correct number or run out of guesses.

```javascript
do {
    let userAnswer = prompt("Guess a number 0 - 100");
    // Game logic here
} while (continueGame);
```

4. If the player's guess is lower than the correct answer, they are told to guess higher. If their guess is higher, they are told to guess lower.

```javascript
if (userAnswer < correctAnswer) {
    alert("Too low, go Higher!");
} else if (userAnswer > correctAnswer) {
    alert("Too high, go Lower");
}
```

5. If the player guesses the correct number, they are congratulated and the game ends. If they run out of guesses, they are also informed and the game ends.

```javascript
if (parseInt(userAnswer) === correctAnswer) {
    alert("Congratulations, Your answer is correct!");
    continueGame = false;
}
```

## How to run

To run this game, simply open the HTML file in your browser. The game will start automatically.