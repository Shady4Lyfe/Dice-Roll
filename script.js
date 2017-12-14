// Dice Roll Simulator

// Declare Variables
let sum2 = 0
let sum3 = 0
let sum4 = 0
let sum5 = 0
let sum6 = 0
let sum7 = 0
let sum8 = 0
let sum9 = 0
let sum10 = 0
let sum11 = 0
let sum12 = 0


// Add Event Listeners
$("#roll").click(diceRoll);

// Event Functions
function diceRoll() {

  let totalRolls = Number($("#totalRolls").val());
  $(".output").html();

  for (let i = 0; i < totalRolls; i++) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    $(".output").append("(" + dice1 + "," + dice2 + ")" + "<br>");

    if (dice1 + dice2 == 2) {
      $("#sums").html("Sum of 2: " + (sum2 + 1));
      sum2++;
    }

    if (dice1 + dice2 == 3) {
      sum3++;
    }

    if (dice1 + dice2 == 4) {
      sum4++;
    }

    if (dice1 + dice2 == 5) {
      sum5++;
    }

    if (dice1 + dice2 == 6) {
      sum6++;
    }

    if (dice1 + dice2 == 7) {
      sum7++;
    }

    if (dice1 + dice2 == 8) {
      sum8++;
    }

    if (dice1 + dice2 == 9) {
      sum9++;
    }

    if (dice1 + dice2 == 10) {
      sum10++;
    }

    if (dice1 + dice2 == 11) {
      sum11++;
    }

    if (dice1 + dice2 == 12) {
      sum12++;
    }
  }

}
