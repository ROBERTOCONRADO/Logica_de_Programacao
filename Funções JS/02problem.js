
let numero = parseFloat(prompt("Digite um número"));

escreve();

function escreve() {
let resultado = document.getElementById("resultado");
resultado.innerHTML = numero;
}

function caucular(simbolo) {
    let n = parseFloat(prompt("Digite outro número"));
    
    switch (simbolo) {
        case '+':
            numero += n;
            break;
        case '-':
            numero -= n;
            break;
        case '*':
            numero *= n;
            break;
        case '/':
            numero /= n;
            break;
            default:
                alert("Invalid parameter");
    }
    escreve();
}


//========atribuindo onclick aos botões====
function somar() {
    let n = parseFloat(prompt("Digite outro número"));
    numero += n;
    escreve();
}
function subtrair() {
    let n = parseFloat(prompt("Digite outro número"));
    numero -= n;
    escreve();
}
function multiplicar() {
    let n = parseFloat(prompt("Digite outro número"));
    numero *= n;
    escreve();
}
function dividir() {
    let n = parseFloat(prompt("Digite outro número"));
    numero /= n;
    escreve();
}