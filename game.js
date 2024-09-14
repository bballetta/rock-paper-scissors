function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3 + 1);
    //console.log(randomInt);
    let computerChoice = "";
    if (randomInt === 1) {
      computerChoice = "Rock";
    }else if (randomInt === 2) {
      computerChoice = "Paper";
    }else {
      computerChoice = "Scissors";
    }
    console.log(`CC: ${computerChoice}`);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Select a weapon! Rock, paper or scissors!",
        "Type rock, paper or scissors to choose.").toLowerCase();
    console.log(`HC: ${humanChoice}`);
    return humanChoice;
}


    function playGame() {
        let round = 0;
        let computerScore = 0;
        let humanScore = 0;
        while (round < 5) {
            console.log(`CS: ${computerScore} HS: ${humanScore} R: ${round}`);
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
            if (computerChoice === "Rock" && humanChoice === "scissors" ||
                computerChoice === "Paper" && humanChoice === "rock" ||
                computerChoice === "Scissors" && humanChoice === "paper") {
                  console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                  computerScore ++;
                  console.log(`C: ${computerScore} H: ${humanScore}`);
            }    
              else if (humanChoice === "rock" && computerChoice === "Scissors" || 
                       humanChoice === "paper" && computerChoice === "Rock" ||
                       humanChoice === "scissors" && computerChoice === "Paper") {
                        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                        humanScore ++;
                        console.log(`C: ${computerScore} H: ${humanScore}`);
              }        
              else {
                console.log(`Tie! You both chose ${computerChoice}!`);
                console.log(`C: ${computerScore} H: ${humanScore}`);
              }
            round++;
            return round;
        }
    }  

playGame()