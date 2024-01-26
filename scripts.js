/***** ROCK PAPER SCISSORS *****/

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
        return playRound(getComputerChoice(), prompt("You must choose rock, paper or scissors to play the game!! Try again. Rock paper, or scissors?"));
    }

    console.log(`PLAYER: ${playerChoice}. COMPUTER: ${computerChoice}.`)

    if(playerChoice === computerChoice) {
        console.log(`It is a tie!`)
        return playRound(getComputerChoice(), prompt("It is a tie! Try again. Rock paper, or scissors?"));
    } else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        console.log("The player won this round.");
        return true;
    } else {
        console.log("The computer won this round.");
        return false;
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 1; i < 6; i++) {
        console.log("ROUND:", i)
        let score = playRound(getComputerChoice(), prompt("Rock, paper, or scissors?"));
       
        if(score) {
            playerScore = playerScore + 1;
        } else {
            computerScore = computerScore + 1;
        }
        console.log(`THE SCORE IS: 
        PLAYER: ${playerScore}
        COMPUTER: ${computerScore}.`);
        
    }

    if(playerScore > computerScore) {
        console.log(`The game has ended. 
        You won! Your score was ${playerScore} and the computer got ${computerScore}.`);

    } else {
        console.log(`The game has ended. 
        You lost! Your score was ${playerScore} and the computer got ${computerScore}.`);
    }

}

game()
