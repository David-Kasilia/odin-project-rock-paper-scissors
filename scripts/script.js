const rockBtn = document.getElementsByClassName('.rock-btn')[0];
const paperBtn = document.getElementsByClassName('.paper-btn')[0];
const scissorsBtn = document.getElementsByClassName('.scissors-btn')[0];
const playerOptions = [rockBtn, paperBtn, scissorsBtn];

let playerScoreBoard = 0;
let computerScoreBoard = 0;

playerOptions.forEach((option) => {
    option.addEventListener('click', function() {

        const playerInput = this.value;

        const computerOptions = ['Rock', 'Paper', 'Scissors']
        const computerPlay = computerOptions[Math.floor(Math.random() * 3)];

        playRound(playerInput, computerPlay);
    });
});

function playRound(playerInput, computerPlay) {

    if (playerInput === computerPlay) {

        alert('The Current Match Is A Draw!')
        return;

    }
    if (playerInput === 'rock') {
        if (computerPlay === 'paper') {
            alert('You Lose! Paper Beats Rock!')
            computerScore++;

        } else {
            alert('Congratulations!! You Won This Round')
            playerScore++;

        }
    } else if (playerInput === 'paper') {
        if (computerPlay === 'scissors') {
            alert('You Lose! Scissors Cuts Paper!')
            computerScore++;

        } else {
            alert('Congratulations!! You Won This Round')
            playerScore++;

        }
    } else if (playerInput === 'scissors') {
        if (computerPlay === 'rock') {
            alert('You Lose! Rock Wrecks Scissors!')
            computerScore++;

        } else {
            alert('Congratulations!! You Won This Round')
            playerScore++;

        }
    }

}