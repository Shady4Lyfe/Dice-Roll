// Dice Roll Simulator

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
    
  }
  
}
