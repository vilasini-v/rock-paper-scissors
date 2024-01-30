
var myList = ["rock", "paper", "scissor"];

function comp(list) {
  var randomIndex = Math.floor(Math.random() * 3);
  return list[randomIndex];
}
const score={
    wins:0, loses: 0, ties:0 
};
function comp1(){
    var randomItem = comp(myList);

    if(randomItem ==='rock'){
        score.ties++;
        document.getElementById('message').innerHTML = `Tie, computer and you put rock`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
    }
    else if (randomItem === 'paper'){
        score.loses++;
        document.getElementById('message').innerHTML = `Computer puts paper, you've lost!`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
    }else{
        score.wins++;
        document.getElementById('message').innerHTML = `Computer puts scissor! you've won!!`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
    }
}
function comp2(){
    var randomItem = comp(myList);

    if(randomItem ==='paper'){
        score.ties++;
        document.getElementById('message').innerHTML = `Tie, computer and you put paper`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;
    }
    else if (randomItem === 'scissor'){
        score.loses++;
        document.getElementById('message').innerHTML = `Computer puts scissors, you've lost!`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;
    }else{
        score.wins++;
        document.getElementById('message').innerHTML = `Computer puts rock! you've won!!`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;
    }

}
function comp3(){
    var randomItem = comp(myList);

    if(randomItem==='scissor'){
        score.ties++;
        document.getElementById('message').innerHTML = `Tie, computer and you put scissors`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;
    }
    else if (randomItem === 'rock'){
        score.loses++;
        document.getElementById('message').innerHTML = `Computer puts rock, you've lost!`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;
    }else{
        score.wins++;
        document.getElementById('message').innerHTML = `Computer puts paper! you've won!!`;
        document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;
    }
}

function reset(){
    score.wins=0;
    score.loses=0;
    score.ties=0;
    document.getElementById('message').innerHTML = `Scores are reset`;
    document.getElementById('score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;}
