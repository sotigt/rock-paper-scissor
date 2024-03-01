/***** ROCK PAPER SCISSORS *****/
choiceBtns = document.querySelectorAll(".choiceBtn");
let infoDiv = document.querySelector('.infoDiv');

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
    console.log(`PLAYER: ${playerChoice}. COMPUTER: ${computerChoice}.`)

    if(playerChoice === computerChoice) {
        infoDiv.textContent = "It is a tie! Try again. Rock, paper or scissors?";
    } else if (
        playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper"
    ) {
        infoDiv.textContent = "The player won this round";
        return true;
    } else {
        infoDiv.textContent = "The computer won this round";
        return false;
    }
}

// function game () {
//     let playerScore = 0;
//     let computerScore = 0;

//     for(let i = 1; i < 2; i++) {
//         console.log("ROUND:", i)
//         let score = playRound(getComputerChoice(), prompt("Rock, paper, or scissors?"));
       
//         if(score) {
//             playerScore = playerScore + 1;
//         } else {
//             computerScore = computerScore + 1;
//         }
//         console.log(`THE SCORE IS: 
//         PLAYER: ${playerScore}
//         COMPUTER: ${computerScore}.`);
        
//     }

//     if(playerScore > computerScore) {
//         console.log(`The game has ended. 
//         You won! Your score was ${playerScore} and the computer got ${computerScore}.`);

//     } else {
//         console.log(`The game has ended. 
//         You lost! Your score was ${playerScore} and the computer got ${computerScore}.`);
//     }

// }

// game()

