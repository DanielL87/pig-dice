// Business Logic for AddressBook ---------
function rollDice() {
    var x = Math.floor((Math.random() * 6) + 1);
    return x;
}


function Player () {
  this.turnScore = 0;
  this.totalScore = 0;
}

var player1 = new Player();
var player2 = new Player();
var turnCount = 0;
var score1 = 0;
var score2 = 0;

Player.prototype.play = function(currentScore){
    if (currentScore === 1){
      this.turnScore = 0;
      turnCount++;
      // console.log(turnCount);
    }  else {
    this.turnScore = this.turnScore + currentScore;
    }


}

// User Interface Logic --------
$(document).ready(function() {
  var passTotal1 = 0;
  var passTotal2 = 0;
  $("#roll").click(function(event) {
    event.preventDefault();
    var randomNumber = rollDice();
    // $("#rollnumber").text(randomNumber);


    if(turnCount % 2 == 0){
      player1.play(randomNumber);
      // score1 = player1.turnScore;
      // player1.totalScore = score1;

      $("#turnScore").text(player1.turnScore);
    } else {
      player2.play(randomNumber);
      score2 = player2.turnScore;
      $("#turnScore").text(player2.turnScore);
    }
    $("#rolldice").html("<img src='img/" + randomNumber + ".png'>");
  });
  $("#pass").click(function(event) {
    event.preventDefault();

    if(turnCount % 2 == 0){
      var passTotal1 = player1.turnScore;

      player1.totalScore += passTotal1;
      player1.turnScore = 0;
      turnCount++;
      $("#score1").text(player1.totalScore);
    } else {
      var passTotal2 = player2.turnScore;

      player2.totalScore += passTotal2;
      player2.turnScore = 0;
      turnCount++;
      $("#score2").text(player2.totalScore);
    }

    if(player1.totalScore>=100){
      alert("player1 won the game");
    } else if (player2.totalScore>=100) {
      alert("player2 won the game");
    }
  });
});
