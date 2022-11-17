// 0 - verde, 1- vermelho, 2 - amarelo, 3- verde

let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

// Criar ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

// Acender a próxima cor
let lightColor = (element, number) => {
   number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
    
}

// Verificar se ordem clicada é a mesma da ordem gerada
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }   
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score} \n Você acertou! Iniciando próximo nível...`);
        nextLevel();
    }
}

// Determinar a ordem digitada pelo usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250);
    
}

// Retornar o número da cor de acordo com o numero sorteado
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

// Iniciar o próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// Game Over
let gameOver = () => {
    alert(`Pontuação: ${score} \n Você perdeu. \n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}

// Iniciar o Jogo
let playGame = () => {
    alert('Bem-vindo ao Genius! Iniciando novo jogo...');
    score = 0;
    nextLevel();
}

//Determinar o clique do usuario
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
