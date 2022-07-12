


function mostrarAreaAlert() {
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a altura"));
    
    try {
        let area = caucularArea(largura, altura);
    } catch (e) {
        area = e;
    }
    
    alert('A área total é: ' + area);
}
mostrarAreaAlert();//assim que a pagina é aberta vai chamar essa função.

function mostrarAreaOutput() {
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a largura"));

    try {
        let area = caucularArea(largura, altura);
    } catch (e) {
        area = e;
    }

    document.getElementById('output').innerHTML = 'A área total é: ' + area;
}

function caucularArea(l, a) {
    if (l === undefined || a === undefined) {
        throw new Error("Digite um valor válido");
    }
    if (isNaN(l) || isNaN(a) ) {
        throw new Error("Apenas numeros são válidos!");
    }
    return l * a;
}