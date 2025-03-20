console.log = Math.floor (Math.random() * 5);

var randomLoc = Math.floor(Math.random() * 5);
// declaring variable
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess 
var hit = 0;
var guesses = 0;

var isSunk = false;

// Game logic
while(isSunk == false){
   guess = prompt("Ready!. Aimi. Fire! (enter number 0-6)");

   if(guess == null){
        alert("Thank you for playing!")
   }
   if (guess < 0 || guess > 6){
       alert ("Please enter a valid call number");
   }else {
     guesses = guesses + 1;
     alert("hits")
     if(guess == location || guess == location || guess == location) {
        hits = hits + 1;
            if(hits == 3){
                inSunk = true;
                alert ("Battleship is now Sunk!")
            }
        } else alert("miss!😒")
    }
}

var accuracy = (guesses > 0 ? (hits / guesses) * 100 :0). toFixed(2);
var stats = "You took" + guesses + " guesses to sink the battleship! " +"\n" + "Accuracy: " + accuracy + "%";
alert(stats);
