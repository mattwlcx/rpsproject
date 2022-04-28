const choices = ["rock", "paper", "scissors"];
const winners = [];

//the game function loops through it 5 times for 5 rounds
function game() {
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('button').textContent = "Let's play again!"
    logWins();
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(round, playerSelection, computerSelection, winner)
}

function playerChoice(){
    let input = prompt("Choose rock, paper, or scissors!");
    while (input == null) {
        input = prompt("Choose rock, paper, or scissors!");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Hey! That's not an option. Try again."
        );
        while (input == null) {
            input = prompt("Choose rock, paper, or scissors!");
        }
        input = input.toLowerCase()
        check = validateInput(input);
    }
return input;
}

function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice){
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC){
    if(choiceP === choiceC){
        return 'Tie';
    }  else if((choiceP === "rock" && choiceC === "scissors") || (choiceP === "paper" && choiceC === "rock") || (choiceP === "scissors" && choiceC === "paper")){
        return 'Player';
    }  else {
        return 'Computer';
    }
}

function logWins (){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log('Reults: ')
    console.log('Player Wins: ', playerWins)
    console.log('Computer Wins: ', computerWins)
    console.log('Ties: ', ties)
}

function logRound(round, playerChoice, computerChoice, winner){
    console.log('Round Number: ', round)
    console.log('Player Chose: ', playerChoice)
    console.log('Computer Chose: ', computerChoice)
    console.log(winner, 'Won the Round')
    console.log("-------------------------------------------")
}