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
  // if (turnCount % 2 == 0){
  //   if(player1.totalScore>=100){
  //     alert("player1 won the game");
  //   } else if (currentScore === 1){
  //     player1.turnScore = 0;
  //     turnCount++;
  //     // console.log(turnCount);
  //   }  else {
  //   player1.turnScore = player1.turnScore + currentScore;
  //   console.log(player1.turnScore);
  //   }
  //   score1 = player1.turnScore;
  //   player1.totalScore = score1;
  //
  //   // this.totalScore = this.turnScore + this.totalScore;
  // } else {
  //   if(player2.totalScore>=100){
  //     alert("player2 won the game");
  //   }else if(currentScore === 1){
  //     player2.turnScore = 0;
  //     turnCount++;
  //     // console.log(turnCount);
  //   } else {
  //   player2.turnScore = player2.turnScore + currentScore;
  //   console.log(player2.turnScore);
  //   }
  //   var score2 = player2.turnScore;
  //   player2.totalScore = score2;
  //
  // }


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
    $("#rollnumber").text(randomNumber);


    if(turnCount % 2 == 0){
      player1.play(randomNumber);
      // score1 = player1.turnScore;
      // player1.totalScore = score1;

      $("#turnScore").text(player1.turnScore);
    } else {
      player2.play(randomNumber);
      // score2 = player2.turnScore;
      // player2.totalScore = score2;
      score2 = player2.turnScore;
      $("#turnScore").text(player2.turnScore);
    }

    // $("#score1").text(player1.totalScore);
    // $("#score2").text(player2.totalScore);


  });

  // $("#pass").click(function(event) {
  //   event.preventDefault();
  //   turnCount++;
  //   $("#score1").text(score1);
  //   $("#score2").text(score2);
  // });
  $("#pass").click(function(event) {
    event.preventDefault();
    // debugger;



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
