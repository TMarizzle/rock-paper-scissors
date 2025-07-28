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
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Computer wins!");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Human wins!");
        humanScore++;
    }else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Human wins!");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Computer wins!");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Computer wins!");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log(`Human chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log("Human wins!");
        humanScore++;
    }

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}


function playGame(rounds){
    let count = 0;
    let humanScore = 0;
    let computerScore = 0;
    while (count <= rounds)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        count++;
    }
}

const numRounds = 5;

playGame(numRounds);
console.log("Thanks for playing!");