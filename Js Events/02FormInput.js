
(function() {
    'use strict';
    let form =document.querySelector('form');
    let usuario = document.getElementById('usuário');
    let senha = document.getElementById('senha');
    let $enviar = document.getElementById('enviar');

    form.addEventListener('submit', function(e) {
        if (!usuario.value || !senha.value ) {/* retorna "" => false com expressão !, if (!usuario.value) [se não tiver usuário.value ] vai cair no alert...*/
            alert('Error: Preencha todos os campos.');
        } else {
            e.preventDefault();
            console.log(usuario.value);
            console.log(senha.value);
        }
    })
})()