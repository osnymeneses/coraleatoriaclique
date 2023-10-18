let fundo = document.querySelector('body');
let botao = document.querySelector('#btn');
let texto = document.querySelector('#cor-rgb');
botao.addEventListener('click', mudarCor);

function mudarCor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;

    let cores = `rgb(${r}, ${g}, ${b})`;
    fundo.style.backgroundColor = cores;
    texto.textContent = `Cor Atual: ${cores}`;
}

