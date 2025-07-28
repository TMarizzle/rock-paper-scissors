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

function getHumanChoice(num) {
    let playerChoice = prompt("Please choose 1 (rock), 2 (paper), or 3 (scissors): ");

    if (playerChoice <= 3 && playerChoice > 0){
        return playerChoice;
    }
    else {
        console.log("Invalid response. Please try again.");
    }
}

let humanScore, computerScore = 0;

function playRound(humanChoice,computerChoice) {
    //play game here
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
    console.log("Thanks for playing!");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);