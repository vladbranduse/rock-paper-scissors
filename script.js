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
            result = "You lose! Paper beats rock!";
        } else if (computerChoice === "Scissors") {
            result = "You win! Rock beats scissors!";
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            result = "You win! Paper beats rock!";
        } else if (computerChoice === "Paper") {
            result = "Tie!";
        } else if (computerChoice === "Scissors") {
            result = "You lose! Scissors beat paper!";
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Rock") {
            result = "You lose! Rock beats scissors!";
        } else if (computerChoice === "Paper") {
            result = "You win! Scissors beat paper!";
        } else if (computerChoice === "Scissors") {
            result = "Tie!";
        }
    }
    return result;
}
let playerScore = 0, computerScore = 0;
document.getElementById("playerscore").innerHTML = playerScore;
document.getElementById("computerscore").innerHTML = computerScore;

rock.addEventListener("click", () => {
    playerSelection = "Rock";
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    if (playerScore < 4 && computerScore < 4) {
        if (play(playerSelection, computerSelection) === "Tie") {
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You win!")) {
            playerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You lose!")) {
            computerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        }
        document.getElementById("message").innerHTML = play(playerSelection, computerSelection);
    } else {
        if (playerScore === 4) {
            playerScore = 0;
            computerScore = 0;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You win the game! You have reached 5 points first!";
        } else {
            playerScore = 0;
            computerScore = 0;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You lose the game! The computer has reached 5 points first!";
        }
    }
});
paper.addEventListener("click", () => {
    playerSelection = "Paper";
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    if (playerScore < 4 && computerScore < 4) {
        if (play(playerSelection, computerSelection) === "Tie") {
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You win!")) {
            playerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You lose!")) {
            computerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        }
        document.getElementById("message").innerHTML = play(playerSelection, computerSelection);
    } else {
        if (playerScore === 4) {
            playerScore = 0;
            computerScore = 0;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You win the game! You have reached 5 points first!";
        } else {
            playerScore = 0;
            computerScore = 0;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You lose the game! The computer has reached 5 points first!";
        }
    }
});
scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    if (playerScore < 4 && computerScore < 4) {
        if (play(playerSelection, computerSelection) === "Tie") {
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You win!")) {
            playerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        } else if (play(playerSelection, computerSelection).includes("You lose!")) {
            computerScore++;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
        }
        document.getElementById("message").innerHTML = play(playerSelection, computerSelection);
    } else {
        if (playerScore === 4) {
            playerScore = 0;
            computerScore = 0;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You win the game! You have reached 5 points first!";
        } else {
            playerScore = 0;
            computerScore = 0;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("computerscore").innerHTML = computerScore;
            document.getElementById("message").innerHTML = "You lose the game! The computer has reached 5 points first!";
        }
    }
});