let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3 + 1);
    console.log(randomInt)
    if (randomInt === 1) {
      computerChoice = "Rock";
    }else if (randomInt ===2) {
      computerChoice = "Paper";
    }else {
      computerChoice = "Scissors";
    }
    console.log(computerChoice);
}

function getHumanChoice() {
    let humanChoice = prompt("Select a weapon! Rock, paper or scissors!",
           "Type rock, paper or scissors to choose.");
    console.log(humanChoice);
}

function playRound() {

}

getComputerChoice()
getHumanChoice()