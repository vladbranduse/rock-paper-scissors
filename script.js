function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice() {
    getRandomInt(3);
    if (getRandomInt(3) === 0) {
        return "Rock";
    } else if (getRandomInt(3) === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?");
    if (choice === "Rock".toLowerCase() || choice === "Paper".toLowerCase() || choice === "Scissors".toLowerCase()) {
        return choice;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice !== null) {
        if (humanChoice === "Rock".toLowerCase()) {
            if (computerChoice === "Rock") {
               console.log("Tie");
            } else if (computerChoice === "Paper") {
               console.log("You lose! Paper beats rock!");
               computerScore++;
            } else if (computerChoice === "Scissors") {
               console.log("You win! Rock beats scissors!");
               humanScore++;
            }
        } else if (humanChoice === "Paper".toLowerCase()) {
            if (computerChoice === "Rock") {
                console.log("You win! Paper beats rock!");
                humanScore++;
            } else if (computerChoice === "Paper") {
                console.log("Tie");
            } else if (computerChoice === "Scissors") {
                console.log("You lose! Scissors beat paper!");
                computerScore++;
            }
        } else if (humanChoice === "Scissors".toLowerCase()) {
            if (computerChoice === "Rock") {
                console.log("You lose! Rock beats scissors!");
                computerScore++;
            } else if (computerChoice === "Paper") {
                console.log("You win! Scissors beat paper!");
                humanScore++;
            } else if (computerChoice === "Scissors") {
                console.log("Tie");
            }
        }
    }
}
  
function playGame() {
    let humanSelection;
    let computerSelection;
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

playGame();