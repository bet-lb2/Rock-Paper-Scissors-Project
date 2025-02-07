// const rockButton = document.getElementById("rock");
// const paperButton = document.getElementById("paper");
// const scissorsButton = document.getElementById("scissors");
const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

function getComputerChoice() {
    // get random number by Math.random() and Math.floor
    const randomNum = Math.floor(Math.random() * 3);
    // return valid string (rock, paper, scissors) depends on random number
    return randomNum === 0 ? "rock" : randomNum === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
    const correctValues = ["rock", "paper", "scissors"];
    // get user input by window.prompt
    let userInput = prompt("Your choice is: ").toLowerCase();
    // if user input isn't valid value, prompt again until user put correct value
    while (!correctValues.includes(userInput)) {
        userInput = prompt("You should select from Rock, Paper, Scissors.").toLowerCase();
    }
    // return human choice
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // if each choices are same
    if (humanChoice === computerChoice) {
        return "It's a tie.\n";
    } else {
        // if human choice beats computer choice, then increment human score and return text
        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice == "scissors" && computerChoice === "paper"
        ) {
            humanScore++;
            return `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.\n`;
        } else {
            //if human choice defeats computer choice, then increment computer score and return text
            computerScore++;
            return `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}\n`;
        }
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        result.innerText = "";
        const playerSelection = e.target.id;
        const computerSelection = getComputerChoice();
        let resultText = playRound(playerSelection, computerSelection);
        resultText += `Your Score: ${humanScore}\nComputer Score: ${computerScore}\n`;
        if (humanScore === 5) {
            resultText += "You win the game.";
            disableButtons();
        }
        if (computerScore === 5) {
            resultText += "You lose the game.";
            disableButtons();
        }
        result.innerText = resultText;
    })
})
