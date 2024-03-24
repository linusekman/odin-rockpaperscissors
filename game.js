// setup the choices for the computer and have it return a random one
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    // have the player input changed to lower case letters
    playerSelection = playerSelection.toLowerCase();

    // setup winning combos to check for result
    const winningCombos = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    if (playerSelection === computerSelection) {
        return "It's a tie! Both chose " + playerSelection;
    }

    if (winningCombos[playerSelection] === computerSelection) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }

    return "You Loose! " + computerSelection + " beats " + playerSelection;
}

function playGame() {

    // loop over the matches one by one until 5 rounds are completed
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice (rock, paper or scissors):");
        const computerChoice = getComputerChoice();

        const result = playRound(playerChoice, computerChoice);

        // printing the result into the console
        console.log("Round " + (i + 1) + ": " + result);
    }
}

// call the function to run
playGame();
