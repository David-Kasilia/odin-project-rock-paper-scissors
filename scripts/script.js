const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const playerOptions = [rockBtn, paperBtn, scissorsBtn];

let playerScoreBoard = 0;
let computerScoreBoard = 0;

playerOptions.forEach((option) => {
    option.addEventListener('click', function() {

        playerSelection = this.textContent;

        const computerChoice = ['Rock', 'Paper', 'Scissors'];
        const computerSelection = computerChoice[Math.floor(Math.random() * 3)];

        playRound(playerSelection, computerSelection);
        updateScore();

        if (checkWinner()) {
            playerScoreBoard = computerScoreBoard = 0;
            updateScore();
        }

    });
});

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        alert('The Current Match Is A Draw!')

    }

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {

        alert('You Lose! Paper Beats Rock!')
        computerScoreBoard++;
    }

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {

        alert('Congratulations!! You Won This Round')
        playerScoreBoard++;
    }
    if (playerSelection === 'Paper' && computerSelection === 'Scissors') {

        alert('You Lose! Scissors Cuts Paper!')
        computerScoreBoard++;
    }
    if (playerSelection === 'Paper' && computerSelection === 'Rock') {

        alert('Congratulations!! You Won This Round')
        playerScoreBoard++;

    }
    if (playerSelection === 'Scissors' && computerSelection === 'Rock') {

        alert('You Lose! Rock Wrecks Scissors!')
        computerScoreBoard++;

    }
    if (playerSelection === 'Scissors' && computerSelection === 'Paper') {

        alert('Congratulations!! You Won This Round')
        playerScoreBoard++;

    }
}

function updateScore() {
    document.querySelector('.playerScore').textContent = playerScoreBoard;
    document.querySelector('.computerScore').textContent = computerScoreBoard;
}

function checkWinner() {
    if (playerScoreBoard === 5 || computerScoreBoard === 5) {
        const winner =
            playerScoreBoard === 5 ?
            "You win the game! Congratulations!" :
            "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
    }
    return false;
}