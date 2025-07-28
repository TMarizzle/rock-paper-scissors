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

function getHumanChoice() {
    let playerChoice = prompt("Please choose rock, paper, or scissors: ").toLowerCase();


    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors"){
        return playerChoice;
    }
    else {
        console.log("Invalid response. Please try again.");
    }
}

function playRound(humanChoice,computerChoice) {
    //play game here

    if (humanChoice == computerChoice){
        return "draw";
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        return "computerwin";
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        return "humanwin";
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        return "humanwin";
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        return "computerwin";
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        return "computerwin";
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        return "humanwin";
    }
}

function playGame(rounds){
    let count = 0;
    let humanScore = 0;
    let computerScore = 0;
    //play until reached number of rounds
    while (count < rounds){
        const player = getHumanChoice();
        const computer = getComputerChoice();
        let winner = playRound(player, computer);

        if (winner == "humanwin"){
            humanScore++;
        }
        else {
            computerScore++;
        }
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        count++;
    }

    if (humanScore > computerScore){
        console.log("Human win! Congrats!");
    } else if (humanScore == computerScore)
    {
        console.log("It's a draw! Let's play again.");
    }
    else {
        console.log("Computer wins! Better luck next time.");
    }
    
}

const numRounds = 5;
playGame(numRounds);