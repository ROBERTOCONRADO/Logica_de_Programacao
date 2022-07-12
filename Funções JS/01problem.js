function criarTabuada() {
    let numero = parseFloat(prompt("Digite um número"));
    limparTabuada();
    let i = 1;
    while (i <= 500) {
        
        mensagem += `${numero} x ${i} = ${numero*i} <br>`;
        i++;
    }
    output.innerHTML = mensagem;
}

function limparTabuada() {
    mensagem = '';
    output.innerHTML = mensagem;
}

let output = document.getElementById('output');

let mensagem = '';

