//
var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;

var hits = 0;

var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready? FIRE! (give me the number from 0 to 6):");
	if (guess < 0 || guess > 6) {
		alert ("Give me the right number, please!");
	}
	else {
		guesses = guesses + 1;
	
	if  (guess == location1 || guess == location2 || guess == location3) {
	alert("You got it!");
		hits = hits + 1;	
	if (hits == 3) {
		isSunk = true;
		alert("You've sunk the ship!");
				}
			}
		else {
			alert("You've missed, try again!");
		}
	}
}

/*var stats = "You needed" + guesses + " prób, by zatopić okręt, czyli twoja efektywność wynosi: " + (3/guesses) ".";
alert(stats);*/