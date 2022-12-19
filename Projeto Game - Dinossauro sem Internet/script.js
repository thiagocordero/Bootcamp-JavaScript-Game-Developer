const dino = document.querySelector(".dinossauro");
const fundo = document.querySelector(".background");
const somPulo = document.getElementById("somPulo");

let isJumping = false;
let isGameOver = false;
let cactosPulados = 0;
let recorde = 0;


let pontos = `<h2> PONTUAÇÃO: ${cactosPulados} </h2>`;
document.getElementById("placar").innerHTML = pontos;

const dino_width = 100;
const cactus_width = 80;
let position = 0;

function pressionouTecla(event) {
    // 32 é a barra de espaço
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        } 
    } 
}

// Função Para Pular: upInterval (sobe) e downInterval (desce)
function jump() {
    isJumping = true;
    somPulo.play();
    let upInterval = setInterval( () => {
        if (position >= 300) {
            // Para de subir
            clearInterval(upInterval);
            // Descendo
            let downInterval = setInterval( () => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + "px";
                }                
            }, 20);
        } else {
        // Subindo
        position += 20;
        dino.style.bottom = position + "px";
        }
    }, 20);
}

// Função para aparacer o cacto
function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1200;
    let randomTime = 1000 + (Math.random() * 2000);

    if (isGameOver) return;
    
    cactus.classList.add('cactus');
    fundo.appendChild(cactus);
    cactus.style.left = cactusPosition + "px";


    let leftInterval = setInterval( () => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            fundo.removeChild(cactus);
            cactosPulados += 1;
            document.getElementById("placar").innerHTML = `<h2> PONTUAÇÃO: ${cactosPulados} </h2>`;
        } else if(cactusPosition > 0 && cactusPosition < dino_width && position < cactus_width ) {
            clearInterval(leftInterval);
        document.body.innerHTML = "<h1 class='game-over'>FIM DE JOGO <p> PONTUAÇÃO FINAL: " + cactosPulados + "</p></h1>";
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}


createCactus();
document.addEventListener("keydown", pressionouTecla);
