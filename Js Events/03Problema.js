
(function() {
    'use strict';
    
    let $msg = document.getElementById('msg');
    let $restante = document.getElementById('restante');
    
    let maxima = $msg.maxLength;

    $msg.addEventListener('input', checarCaracteres);
    $restante.textContent = maxima;

    function checarCaracteres(e) {
        let numeroLetrasDigitadas = this.value.length;
        $restante.textContent = maxima - numeroLetrasDigitadas;
    }
})()

/*
    $msg.addEventListener('keypress', keypress);
    $msg.addEventListener('keyup', keyup);
    $msg.addEventListener('keydown', keydown);

    function keypress(e) {//Quando pressiona caracter, letra, número..
        console.log('keypress', this.value);
    }
    function keyup(e) {
        console.log('keyup', this.value);
    }
    function keydown(e) {
        console.log('keydown', this.value);
    }
*/    