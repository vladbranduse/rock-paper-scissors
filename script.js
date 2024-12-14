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
    if (choice.toLowerCase() === "Rock".toLowerCase() || choice.toLowerCase() === "Paper".toLowerCase() || choice.toLowerCase() === "Scissors".toLowerCase()) {
        return choice;
    } else {
        return null;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice !== null) {
            if (humanChoice.toLowerCase() === "Rock".toLowerCase()) {
                if (computerChoice === "Rock") {
                console.log("Round ended with a tie!");
                } else if (computerChoice === "Paper") {
                console.log("You lose this round! Paper beats rock!");
                computerScore++;
                } else if (computerChoice === "Scissors") {
                console.log("You win this round! Rock beats scissors!");
                humanScore++;
                }
            } else if (humanChoice.toLowerCase() === "Paper".toLowerCase()) {
                if (computerChoice === "Rock") {
                    console.log("You win this round! Paper beats rock!");
                    humanScore++;
                } else if (computerChoice === "Paper") {
                    console.log("Round ended with a tie!");
                } else if (computerChoice === "Scissors") {
                    console.log("You lose this round! Scissors beat paper!");
                    computerScore++;
                }
            } else if (humanChoice.toLowerCase() === "Scissors".toLowerCase()) {
                if (computerChoice === "Rock") {
                    console.log("You lose this round! Rock beats scissors!");
                    computerScore++;
                } else if (computerChoice === "Paper") {
                    console.log("You win this round! Scissors beat paper!");
                    humanScore++;
                } else if (computerChoice === "Scissors") {
                    console.log("Round ended with a tie!");
                }
            }
        }
    }
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
    if (humanScore > computerScore) {
        console.log("You win the game! You have won more rounds than the computer!");
    } else if (humanScore === computerScore) {
        console.log("Game ended with a tie!");
    } else {
        console.log("You lose the game! The computer has won more rounds than you!");
    }
}

playGame();