const rock = document.getElementById("btn1");
const paper = document.getElementById("btn2");
const scissors = document.getElementById("btn3");
let playerSelection;
const rockPaperScissors = ["Rock", "Paper", "Scissors"];
let computerSelection;
function play(playerChoice, computerChoice) {
    let result;
    if (playerChoice === "Rock") {
        if (computerChoice === "Rock") {
            result = "Tie!";
        }
        if (computerChoice === "Paper") {
            result = "You lose this round! Paper beats rock!";
        } else if (computerChoice === "Scissors") {
            result = "You win this round! Rock beats scissors!";
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            result = "You win this round! Paper beats rock!";
        } else if (computerChoice === "Paper") {
            result = "Tie!";
        } else if (computerChoice === "Scissors") {
            result = "You lose this round! Scissors beat paper!";
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            result = "You lose this round! Rock beats scissors!";
        } else if (computerChoice === "Paper") {
            result = "You win this round! Scissors beat paper!";
        } else if (computerChoice === "Scissors") {
            result = "Tie!";
        }
    }
    return result;
}
let playerScore = 0, computerScore = 0, numberOfRounds = 0;
document.getElementById("playerscore").innerHTML = playerScore;
document.getElementById("computerscore").innerHTML = computerScore;

rock.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    if (numberOfRounds < 4) {
        if (play(playerSelection, computerSelection) === "Tie!") {
            numberOfRounds++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You win")) {
            numberOfRounds++;
            playerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You lose")) {
            numberOfRounds++;
            computerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        }
        document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection);
    } else {
        numberOfRounds++;
        if (play(playerSelection, computerSelection) === "Tie!") {
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        } else if (play(playerSelection, computerSelection).includes("You win")) {
            playerScore++;
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        } else if (play(playerSelection, computerSelection).includes("You lose")) {
            computerScore++;
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        }
    }
});
paper.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    if (numberOfRounds < 4) {
        if (play(playerSelection, computerSelection) === "Tie!") {
            numberOfRounds++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You win")) {
            numberOfRounds++;
            playerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You lose")) {
            numberOfRounds++;
            computerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        }
        document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection);
    } else {
        numberOfRounds++;
        if (play(playerSelection, computerSelection) === "Tie!") {
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        } else if (play(playerSelection, computerSelection).includes("You win")) {
            playerScore++;
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        } else if (play(playerSelection, computerSelection).includes("You lose")) {
            computerScore++;
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        }
    }
});
scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    if (numberOfRounds < 4) {
        if (play(playerSelection, computerSelection) === "Tie!") {
            numberOfRounds++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You win")) {
            numberOfRounds++;
            playerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You lose")) {
            numberOfRounds++;
            computerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        }
        document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection);
    } else {
        numberOfRounds++;
        if (play(playerSelection, computerSelection) === "Tie!") {
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        } else if (play(playerSelection, computerSelection).includes("You win")) {
            playerScore++;
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        } else if (play(playerSelection, computerSelection).includes("You lose")) {
            computerScore++;
            if (playerScore > computerScore) {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" +  "You win the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else if (playerScore < computerScore) {
                document.getElementById("message").innerHTML = "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "You lose the game!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            } else {
                document.getElementById("message").innerHTML =  "Round " + numberOfRounds + " : " + play(playerSelection, computerSelection) + "<br>" + "Final scores: Player Score " + playerScore + " - " + computerScore + " Computer Score" + "<br>" + "The game has ended with a tie!";
                playerScore = 0;
                computerScore = 0;
                numberOfRounds = 0;
                document.getElementById("playerscore").innerHTML = playerScore;
                document.getElementById("computerscore").innerHTML = computerScore;
            }
        }
    }
});