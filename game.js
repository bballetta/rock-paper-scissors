const btnR = document.getElementById('btnR');
const btnP = document.getElementById('btnP');
const btnS = document.getElementById('btnS');

const outputDiv = document.getElementById('output');

let computerScore = 0;
let humanScore = 0;
let round = 0;
const maxRounds = 5;

btnR.addEventListener('click', () => playRound('rock'));
btnP.addEventListener('click', () => playRound('paper'));
btnS.addEventListener('click', () => playRound('scissors'));

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[randomInt];
    console.log(`CC: ${computerChoice}`);
    return computerChoice;
}
    
function playRound(humanChoice) {
  if (round >= maxRounds) {
    outputDiv.innerHTML = `
      <p>Game Over!</p>
      <p>Final Scores:</p>
      <p>You: ${humanScore}</p>
      <p>Computer: ${computerScore}</p>
      ${gameOver()}}
    `;
    return;  
  }
    const computerChoice = getComputerChoice();
    let result = '';

    if (computerChoice === "Rock" && humanChoice === "scissors" ||
        computerChoice === "Paper" && humanChoice === "rock" ||
        computerChoice === "Scissors" && humanChoice === "paper") {
          computerScore ++;
          result = `You lose the round! ${computerChoice} beats ${humanChoice}!<br>
                    The score is: You: ${humanScore} Computer: ${computerScore}`;
        
    }    
        else if (humanChoice === "rock" && computerChoice === "Scissors" || 
                 humanChoice === "paper" && computerChoice === "Rock" ||
                 humanChoice === "scissors" && computerChoice === "Paper") {
                  humanScore ++;
                  result = `You win the round! ${humanChoice} beats ${computerChoice}!<br>
                            The score is: You: ${humanScore} Computer: ${computerScore}`;
            
        }        
        else {
          result = `Tie round! You both chose ${computerChoice}!<br>
                    The score is: You: ${humanScore} Computer: ${computerScore}`;
        }
    round++;
    document.getElementById('output').innerHTML = result;
    
    if (round === maxRounds) {
      outputDiv.innerHTML += `
        <p>Game Over!</p>
        ${gameOver()}
      `;
    }
} 

function gameOver() {
  if (computerScore > humanScore) {
    return ("YOU LOSE!");
  }  
    else if (humanScore > computerScore) {
      return ("YOU WIN!");
    }
    else {
      return ("IT'S A TIE!");
    }
}