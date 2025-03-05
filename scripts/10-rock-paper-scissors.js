let playerMove;
let computerMove;

let score = JSON.parse(localStorage.getItem('score')) || { win: 0, loss: 0, tie: 0 };




function displayScore() {

    if (result === 'tie') {
        score.tie++;
    }
    else if (result === 'you win') {

        score.win++;
    }
    else if (result === 'you lose') {

        score.loss++;
    }

    // saving the score to local storage
    // local storage only stores strings
    localStorage.setItem('score', JSON.stringify(score));





}


//function to update score
function updateScore() {
    document.querySelector('.js-score').innerHTML =
        `you picked ${playerMove} and the computer picked ${computerMove}. ${result}.tie: ${score.tie}, wins: ${score.win}, losses: ${score.loss}`;
}


function reset() {
    score = {
        win: 0,
        loss: 0,
        tie: 0,

    };
    localStorage.removeItem('score');
    updateScore();
    alert("Scores reset!");
}



let result = '';
// function for game logic
function playGame(move) {
    playerMove = move;

    pickComputerMove();
    if (playerMove === 'scissors') {
        if (computerMove === 'scissors') {
            result = 'tie';
        }
        else if (computerMove === 'paper') {
            result = 'you win';
        }
        else if (computerMove === 'rock') {
            result = 'you lose';
        }
    }


    else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        }
        else if (computerMove === 'paper') {
            result = 'you lose';
        }
        else if (computerMove === 'scissors') {
            result = 'you win';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'tie';
        }
        else if (computerMove === 'scissors') {
            result = 'you lose';
        }
        else if (computerMove === 'rock') {
            result = 'you win';
        }
    }
}


displayScore();
updateScore();



// function to pick a random move for the computer
function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    console.log(computerMove);
}



