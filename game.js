let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3 + 1);
    console.log(randomInt);
    let computerChoice = "";
    if (randomInt === 1) {
      computerChoice = "Rock";
    }else if (randomInt === 2) {
      computerChoice = "Paper";
    }else {
      computerChoice = "Scissors";
    }
    console.log(computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Select a weapon! Rock, paper or scissors!",
           "Type rock, paper or scissors to choose.").toLowerCase();
    console.log(humanChoice);
    return humanChoice;
}

function playRound(computerChoice,humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (computerChoice === "Rock") {
      if (humanChoice === "scissors") {
        console.log("You lose! Rock beats Scissors!");
        computerScore ++;
      }  
      else if (humanChoice === "paper") {
        console.log("You win! Paper beats Rock!");
        humanScore ++;
      }
      else {
        console.log("Tie! You both chose Rock!")
      }
    }
}

/*getComputerChoice();
getHumanChoice();*/
playRound()