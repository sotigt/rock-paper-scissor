/***** ROCK PAPER SCISSORS *****/
const choiceBtns = document.querySelectorAll(".choiceBtn");
const infoDiv = document.querySelector(".infoDiv");
const roundResultDiv = document.querySelector(".roundResultDiv");
const finalResultsDiv = document.querySelector(".finalResultsDiv");
const currentScore = document.querySelector(".currentScoreDiv");

/*** game variables ***/
let playerScore = 0
let computerScore = 0;

choiceBtns.forEach(button => {
    button.addEventListener('click', () => {
        playRound(getComputerChoice(), button.id);
    })
})

function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];

    return randomOption;
}

function playRound (computerChoice, playerChoice) {
    /* restarts the game */
    if(playerScore === 5 || computerScore === 5) {
        finalResultsDiv.innerText = "";
        playerScore = 0;
        computerScore = 0;
    }

    roundResultDiv.textContent = `Player: ${playerChoice}. Computer: ${computerChoice}`;

    if(playerChoice === computerChoice) {
        infoDiv.textContent = "It is a tie! Try again. Rock, paper or scissors?";
    } else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        infoDiv.textContent = "The player won this round";
        playerScore = playerScore + 1;
    } else {
        infoDiv.textContent = "The computer won this round";
        computerScore = computerScore + 1;
    }

    currentScore.textContent = `The score is ${playerScore} to the player and ${computerScore} to the computer.`


    if(playerScore === 5 || computerScore === 5) {
        playerScore > computerScore 
        ? finalResultsDiv.innerText = `The game has ended. You won! Your score was ${playerScore} and the computer got ${computerScore}.`
        : finalResultsDiv.innerText = `The game has ended. You lost! Your score was ${playerScore} and the computer got ${computerScore}.`

        currentScore.textContent = "";
    }
}






