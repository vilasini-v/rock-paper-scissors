
var myList = ["rock", "paper", "scissor"];

function comp(list) {
  var randomIndex = Math.floor(Math.random() * 3);
  return list[randomIndex];
}
const score={
    wins:0, losses: 0, ties:0 
};
function comp1(){
    var randomItem = comp(myList);

    if(randomItem ==='rock'){
        score.ties++;
        alert("Tie, computer and you put rock\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }
    else if (randomItem === 'paper'){
        score.losses++;
        alert("Computer puts paper, you've lost!\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }else{
        score.wins++;
        alert("Computer puts scissor! you've won!!\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }
}
function comp2(){
    var randomItem = comp(myList);

    if(randomItem ==='paper'){
        score.ties++;
        alert("Tie, computer and you put paper\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }
    else if (randomItem === 'scissor'){
        score.losses++;
        alert("Computer puts scissors, you've lost!\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }else{
        score.wins++;
        alert("Computer puts rock! you've won!!\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }

}
function comp3(){
    var randomItem = comp(myList);

    if(randomItem==='scissor'){
        score.ties++;
        alert("Tie, computer and you put scissor \nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }
    else if (randomItem === 'rock'){
        score.losses++;
        alert("Computer puts rock, you've lost!\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }else{
        score.wins++;
        alert("Computer puts paper! you've won!!\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
    }
}

function reset(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    alert("Scores are reset.\nWins: "+ score.wins + " Losses: " +score.losses + " Ties: " + score.ties);
}
