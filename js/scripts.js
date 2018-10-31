// Business Logic for AddressBook ---------
function rollDice() {
    var x = Math.floor((Math.random() * 6) + 1);
    return x;
}


function Player (turnScore, totalScore) {
  this.turnScore = turnScore,
  this.totalScore = totalScore
}

var player1 = new Player(0,0);
var player2 = new Player(0,0);
var turnCount = 0;
Player.prototype.play = function(currentScore){
  if (turnCount % 2 == 0){
    if(player1.totalScore>=100){
      alert("Player1 won the game");
    } else if (currentScore === 1){
      player1.turnScore = 0;
      turnCount++;
      console.log(turnCount);
    }  else {
    player1.turnScore = player1.turnScore + currentScore;
    player1.totalScore = player1.turnScore ;
    }
  } else {
    if(player2.totalScore>=100){
      alert("Player2 won the game");
    }else if(currentScore === 1){
      player2.turnScore = 0;
      turnCount++;
      console.log(turnCount);
    } else {
    player2.turnScore = player2.turnScore + currentScore;
    }
    player2.totalScore = player2.turnScore + player2.totalScore;
  }

}




// User Interface Logic --------
$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();
    var randomNumber = rollDice();
    $("#rollnumber").text(randomNumber);
    player2.play(randomNumber);



    $("#score1").text(player1.totalScore);
    $("#score2").text(player2.totalScore);





  });
});
