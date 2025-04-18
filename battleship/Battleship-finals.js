var randomLoc = Math.floor(Math.random() * 5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2];
// Store ship locations in an array

var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (!isSunk) {
    guess = prompt("Ready! Aim! Fire! (enter a number 0-6)");

    if (guess === null) {
        alert("Thank you for playing!");
        break;
    }

    // Convert input to a number base 10
    guess = parseInt(guess, 10);

    // Validate the input
    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6.");
        continue;
    }

    guesses++;

    const hitIndex = shipLocations.indexOf(guess);

    if (hitIndex !== -1) {
        alert("Hit!");
        shipLocations.splice(hitIndex, 1); // Remove hit location
        hits++;

        if (shipLocations.length) {
            isSunk = true;
            alert("Battleship is now sunk!");
        }
    } else {
        alert("Miss! 😒");
    }
}

// Calculate accuracy
var accuracy = (guesses > 0) ? ((hits / guesses) * 100).toFixed*(2) : 0;
var stats = "You took" + guesses + " guesses to sink the battleship!\n" +
            "Accuracy: " + accuracy + "%";
alert(stats);