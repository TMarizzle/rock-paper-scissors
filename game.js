let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rockBtn");
const paperButton = document.querySelector(".paperBtn");
const scissorsButton = document.querySelector(".scissorsBtn");
const humanScoreboard = document.querySelector(".humanPoints");
const computerScoreboard = document.querySelector(".computerPoints");
const gameLog = document.createElement("p");
const logArea = document.querySelector(".log");

rockButton.addEventListener('click', function(){
    playRound(rockButton.value);
});
paperButton.addEventListener('click', function () {
    playRound(paperButton.value);
});
scissorsButton.addEventListener('click', function () {
    playRound(scissorsButton.value);
});

function getComputerChoice () {
    let choice = Math.floor((Math.random() * 3) + 1);

    if (choice == 1)
    {
        return "rock";
    }
    else if (choice == 2){
        return "paper";
    }
    else if (choice == 3){
        return "scissors";
    }
    else {
        return "unknown number";
    }
}

function playRound(humanChoice) {
    //play game here
    let computerChoice = getComputerChoice();

    if ((humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++;
        gameLog.textContent = `Human win! ${humanChoice} beats ${computerChoice}`;
        logArea.appendChild(gameLog);
        humanScoreboard.textContent = `Human: ${humanScore}`;

        if (humanScore == 5){
            alert("Human wins! Congrats! Refresh to play again.");
            location.reload();
        }
    }

    else if (humanChoice == computerChoice){
        gameLog.textContent = `It's a draw! You both chose ${humanChoice}`;
        logArea.appendChild(gameLog);
    }
    else {
        computerScore++;
        gameLog.textContent = `Computer win! ${computerChoice} beats your ${humanChoice}`;
        logArea.appendChild(gameLog);
        computerScoreboard.textContent = `Computer: ${computerScore}`;
        if (computerScore == 5){
            alert(`Computer is victorious! Refresh to play again.`);            
            location.reload();
        }
    }
}