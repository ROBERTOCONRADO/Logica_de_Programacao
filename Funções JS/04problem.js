


function mostrarAreaAlert() {
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a altura"));
    var area = calcularArea(largura, altura);
    alert("A área total é: " + area );
}

function mostrarAreaOutput() {
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a altura"));
    var area = calcularArea(largura, altura);
    document.getElementById("output").innerHTML = "A área total é: " + area;
}

function calcularArea(l, a) {
    return l * a;
}