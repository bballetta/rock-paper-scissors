function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3 + 1);
    console.log(randomInt)
    if (randomInt === 1) {
      weapon = "Rock";
    }else if (randomInt ===2) {
      weapon = "Paper";
    }else {
      weapon = "Scissors";
    }
    console.log(weapon);
}

function getHumanChoice() {
    let userWeapon = prompt("Select a weapon! Rock, paper or scissors!",
           "Press r, p or s to choose.");
    console.log(userWeapon);
}

getComputerChoice()
getHumanChoice()