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

// function getHumanChoice() {
//     let playerChoice = prompt("Please choose rock, paper, or scissors: ").toLowerCase();


//     if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors"){
//         return playerChoice;
//     }
//     else {
//         console.log("Invalid response. Please try again.");
//     }
// }

function playRound(humanChoice) {
    //play game here
    let computerChoice = getComputerChoice();

    if ((humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++;
        console.log(`Human win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Current score: Human - ${humanScore}, Computer - ${computerScore}`);

        if (humanScore == 5){
            console.log("Human wins! Great game!");
            console.log("Refresh page to play again!");
        }
    }

    else if (humanChoice == computerChoice){
        console.log(`It's a draw! You both chose ${humanChoice}`);
    }
    else {
        computerScore++;
        console.log(`Computer win! ${computerChoice} beats your ${humanChoice}`);
        console.log(`Current score: Human - ${humanScore}, Computer - ${computerScore}`);

        if (computerScore == 5){
            console.log("Computer Wins!");
            console.log("Refresh page to play again!");
        }
    }
}

//let count = 0;
let humanScore = 0;
let computerScore = 0;
let winner = "";
let computer = "";

const rockButton = document.querySelector(".rockBtn");
const paperButton = document.querySelector(".paperBtn");
const scissorsButton = document.querySelector(".scissorsBtn");

// rockButton.addEventListener('click', function () {
//     computer = getComputerChoice();
//     winner = playRound("rock", computer);
//     console.log(winner);
//     if (winner == "humanwin") {
//         humanScore++;
//     } else if (winner == "computerwin") {
//         computerScore++;
//     }

// });

rockButton.addEventListener('click', function(){
    playRound(rockButton.value);
});
paperButton.addEventListener('click', function () {
    playRound(paperButton.value);
});
scissorsButton.addEventListener('click', function () {
    playRound(scissorsButton.value);
});

    // while (humanScore <= 5 || computerScore <= 5){
    //     const player = getHumanChoice();
    //     const computer = getComputerChoice();
    //     let winner = playRound(player, computer);

    //     if (winner == "humanwin"){
    //         humanScore++;
    //     }
    //     else {
    //         computerScore++;
    //     }
    //     console.log(`Human score: ${humanScore}`);
    //     console.log(`Computer score: ${computerScore}`);
    //     //count++;
    // }

    // if (humanScore > computerScore){
    //     console.log("Human win! Congrats!");
    // } else if (humanScore == computerScore)
    // {
    //     console.log("It's a draw! Let's play again.");
    // }
    // else {
    //     console.log("Computer wins! Better luck next time.");
    // }
    
//const numRounds = 5;
//playGame(numRounds);