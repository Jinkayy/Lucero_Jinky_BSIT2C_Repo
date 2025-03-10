// declaring variable
var location1 = 3;
var location1 = 4;
var location1 = 5;

var guess 
var hit = 0;
var guesses = 0;

var isSunk = false;

// Game logic

while(isSunk == false){
   guess = prompt("Ready!. Aimi. Fire! (enter number 0-6)");
   if (guess < 0 || guess > 6){
       alert ("lease enter a valid call number");
   }else {
     guesses = guesses + 1;
     alert("hits")
     if(guess == location || guess == location || guess == location) {
        hits = hits + 1;
        if(hits == 3){
            inSunk = true;
            alert ("You sunk my battleship")

        }
     }
     else(
        alert("miss")
     )
   }
}

var stats = "You sank my battleship at: " + guesses + "guesses" + "and your accuracy is:" + (3/guesses);

alert(stats);

alert("hit the location")