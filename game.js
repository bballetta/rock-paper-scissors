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


    function playGame() {
        let round = 0;
        let computerScore = 0;
        let humanScore = 0;
        while (round < 5) {
            console.log(computerScore,humanScore,round);
            playRound();
            if (round === 5) {
              if (computerScore > humanScore) {
                console.log("YOU LOSE!");
              }  
              else if (humanScore > computerScore) {
                console.log("YOU WIN!");
              }
              else {
                console.log("IT'S A TIE!");
              }
                break;
            }
        }
    
        function playRound(computerChoice,humanChoice) {
            computerChoice = getComputerChoice();
            humanChoice = getHumanChoice();
            if (computerChoice === "Rock") {
              if (humanChoice === "scissors") {
                console.log("You lose! Rock beats Scissors!");
                computerScore ++;
                console.log(computerScore,humanScore);
              }  
              else if (humanChoice === "paper") {
                console.log("You win! Paper beats Rock!");
                humanScore ++;
                console.log(computerScore,humanScore);
              }
              else {
                console.log("Tie! You both chose Rock!");
                console.log(computerScore,humanScore);
              }
            }
            if (computerChoice === "Paper") {
              if (humanChoice === "rock"){
                console.log("You lose! Paper beats Rock!");
                computerScore ++;
                console.log(computerScore,humanScore);
              }  
              else if (humanChoice === "scissors") {
                console.log("You win! Scissors beat Paper!");
                humanScore ++;
                console.log(computerScore,humanScore);
              }
              else {
                console.log("Tie! You both chose Paper!");
                console.log(computerScore,humanScore);
              }
            }
            if (computerChoice === "Scissors") {
                if (humanChoice === "paper"){
                  console.log("You lose! Scissors beat Paper!");
                  computerScore ++;
                  console.log(computerScore,humanScore);
                }  
                else if (humanChoice === "rock") {
                  console.log("You win! Rock beats Scissors!");
                  humanScore ++;
                  console.log(computerScore,humanScore);
                }
                else {
                  console.log("Tie! You both chose Scissors!");
                  console.log(computerScore,humanScore);
                }
            }
            round++;
            return round;
        }
    }  

playGame()