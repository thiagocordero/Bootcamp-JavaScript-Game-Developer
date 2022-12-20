var player, winner = null;
var playingNow = document.getElementById('selected-player');
var newWinner = document.getElementById('winner');
var allSquares = document.getElementsByClassName('square');

playersTakeTurns("X")

function clickOnSquare(id) {

    if (winner !== null) {
        return;
    }

    var square = document.getElementById(id);
    if (square.innerHTML !== '-') {
        return;
    }
    
    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    playersTakeTurns(player);
    checkForWinner();
}

function playersTakeTurns(value) {
    player = value;
    playingNow.innerHTML = player;    
}

function checkForWinner() {
    square1 = document.getElementById(1);
    square2 = document.getElementById(2);
    square3 = document.getElementById(3);
    square4 = document.getElementById(4);
    square5 = document.getElementById(5);
    square6 = document.getElementById(6);
    square7 = document.getElementById(7);
    square8 = document.getElementById(8);
    square9 = document.getElementById(9);

    if(checkSequence(square1, square2, square3)) {
        changeSquareColor(square1, square2, square3);
        selectWinner(square1);
        return;
    }

    if(checkSequence(square4, square5, square6)) {
        changeSquareColor(square4, square5, square6);
        selectWinner(square4);
        return;
    }

    if(checkSequence(square7, square8, square9)) {
        changeSquareColor(square7, square8, square9);
        selectWinner(square7);
        return;
    }

    if(checkSequence(square1, square4, square7)) {
        changeSquareColor(square1, square4, square7);
        selectWinner(square1);
        return;
    }

    if(checkSequence(square2, square5, square8)) {
        changeSquareColor(square2, square5, square8);
        selectWinner(square2);
        return;
    }

    if(checkSequence(square3, square6, square9)) {
        changeSquareColor(square3, square6, square9);
        selectWinner(square3);
        return;
    }

    if(checkSequence(square1, square5, square9)) {
        changeSquareColor(square1, square5, square9);
        selectWinner(square1);
        return;
    }

    if(checkSequence(square3, square5, square7)) {
        changeSquareColor(square3, square5, square7);
        selectWinner(square3);
        return;
    }
}

function checkSequence(squareA, squareB, squareC) {
    var sequence = false;
    if (squareA.innerHTML !== '-' && squareA.innerHTML === squareB.innerHTML &&  squareB.innerHTML === squareC.innerHTML) {
        sequence = true;
    }
    return sequence;
}

function changeSquareColor(squareA, squareB, squareC) {
    squareA.style.background = '#0f0';
    squareB.style.background = '#0f0';
    squareC.style.background = '#0f0';
}

function selectWinner(square) {
    winner = square.innerHTML;
    newWinner.innerHTML = winner;
}

function restart() {
    winner = null;
    selectWinner.innerHTML = winner;

    for (let i = 1; i <= 9; i++) {
        let square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }
}





