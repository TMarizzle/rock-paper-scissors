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
        console.log("Tie! No one wins.");
        return "draw";
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Computer wins!");
        return "computerwin";
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Human wins!");
        return "humanwin";
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Human wins!");
        return "humanwin";
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Computer wins!");
        return "computerwin";
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Computer wins!");
        return "computerwin";
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Human wins!");
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
console.log("Thanks for playing!");