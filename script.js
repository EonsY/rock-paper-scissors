// variables
let playerSelection = "";
let computerSelection = "";
let results = "";
let wins = 0;
let loses = 0;

// function to get random "rock, paper, scissors"
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else if (num === 3) {
        return "scissors";
    } else {
        return console.error("Invalid");
    }
}

// fucntion to play one round of rock paper scissors
function playRound() {
    playerSelection = (prompt("Rock, Paper or Scissors?")).toLowerCase();
    computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        results = "draw";
        return results;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        loses++;
        results = "lose";
        return results;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        wins++;
        results = "win";
        return results;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        wins++;
        results = "win";
        return results;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        loses++;
        results = "lose";
        return results;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        loses++;
        results = "lose";
        return results;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        wins++;
        results = "win";
        return results;
    } else {
        return console.error("Invalid");
    }
}


//function to play any games of rock paper scissors
function game() {
    let rounds = parseInt(prompt("How many rounds do you want to play?"));
    for (let i = 0; i < rounds; i++) {
        console.log(playRound());
    }
    if (wins == loses) {
        return "Game finished! It's a draw!";
    } else if (wins > loses) {
        return "Game finished! You win!";
    } else if (wins < loses) {
        return "Game finished! You lose! Hand out your soul."
    }
}