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
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // if each choices are same
    if (humanChoice === computerChoice) {
        return "It's a tie.";
    } else {
        // if human choice beats computer choice, then increment human score and return text
        if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice == "scissors" && computerChoice === "paper"
        ) {
            humanScore++;
            return `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}.`;
        } else {
            //if human choice defeats computer choice, then increment computer score and return text
            computerScore++;
            return `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`;
        }
    }
}

function playGame() {
    // 5 loops with playRound func
    for (let i = 0; i < 5; i++) {
        const humanSelect = getHumanChoice();
        const computerSelect = getComputerChoice();
        console.log(playRound(humanSelect, computerSelect));
    }
    // return text depending on each scores
    let resultText = `Your Score: ${humanScore}\nComputer Score: ${computerScore}\n`;
    if (humanScore > computerScore) {
        return resultText + "So you win the game.";
    } else if (humanScore === computerScore) {
        return resultText + "So this game is tie.";
    } else {
        return resultText + "So you lose the game.";
    }
}
// comment out this line and start the game
// console.log(playGame());