
(function () {
    function calcularIMC (peso, altura) {
        return peso / (altura * altura);
    }
    function classificaIMC (imc) {
        if (imc <= 16.9) {
            return 'Muito abaixo do peso.';
        } else if (imc <= 18.4) {
            return 'Abaixo do peso.';
        } else if (imc <= 24.9) {
            return 'Peso Normal.';
        } else if (imc <= 29.9) {
            return 'Acima do peso.';
        } else if (imc <= 34.9) {
            return 'Obesidade 1.';
        } else if (imc <= 40) {
            return 'Obesidade 2.';
        } else if (imc <= 44.9) {
            return 'Obesidade 3.';
        }   
    }
    
    let peso = 83;
    let altura = 1.72

    let imc = calcularIMC(peso, altura);
    let classificacao = classificaIMC(imc);
    console.log('classificacao IMC: ' + classificacao);

    document.getElementById('resultado').innerHTML = classificacao;
})();