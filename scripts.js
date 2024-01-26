//****  ROCK PAPER SCISSORS

function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];

    return randomOption;
}

function playRound (computerChoice, playerChoice) {
    if(
        playerChoice.toLowerCase() !== "rock" &&
        playerChoice.toLowerCase() !== "paper" &&
        playerChoice.toLowerCase() !== "scissors"
    ) {
        playRound(getComputerChoice(), prompt("You must choose rock, paper or scissors to play the game!! Try again. Rock paper, or scissors?"));
    }

    if(computerChoice === "rock") {
        if(playerChoice === "rock") {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice, "You are even!");
           return playRound(getComputerChoice(), prompt("You are even! Try again. Rock paper, or scissors?"));
        } else if (playerChoice === "paper") {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice);
            return true;
        } else {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice);
            return false;
        }
    } else if (computerChoice === "paper") {
        if(playerChoice === "paper") {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice, "You are even!");
           return playRound(getComputerChoice(), prompt("You are even! Try again. Rock paper, or scissors?"));

        } else if (playerChoice === "scissors") {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice);
            return true;

        } else {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice);
            return false;

        }
    } else if (computerChoice === "scissors") {
        if(playerChoice === "scissors") {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice, "You are even!");
            return playRound(getComputerChoice(), prompt("You are even! Try again. Rock paper, or scissors?"));
        } else if (playerChoice === "rock") {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice);
            return true;
        } else {
            console.log("The computer chose:", computerChoice, "The player chose:", playerChoice);
            return false;
        }
    }

}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i < 6; i++) {
        console.log("ROUND:", i)
        let score = playRound(getComputerChoice(), prompt("Rock, paper, or scissors?"));
       
        if(score) {
            console.log("You won this round!")
            playerScore = playerScore + 1;
        } else {
            console.log("The computer won this round!");
            computerScore = computerScore + 1;
        }
        console.log(`THE SCORE IS: Player: ${playerScore}, Computer: ${computerScore}.`)
        
    }

    if(playerScore > computerScore) {
        console.log(`You won! Your score was ${playerScore} and the computer got ${computerScore}.`);

    } else {
        console.log(`You lost! Your score was ${playerScore} and the computer got ${computerScore}.`);
    }

}

game()
