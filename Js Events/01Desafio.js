
(function() {
    'use strict';
    let usuario = document.getElementById('usuário');
    let senha = document.getElementById('senha');
    let $enviar = document.getElementById('enviar');

    $enviar.addEventListener('click', function() {
        if (!usuario.value || !senha.value ) {/* retorna "" => false com expressão !, if (!usuario.value) [se não tiver usuário.value ] vai cair no alert...*/
            alert('Error: Preencha todos os campos.');
        } else {
            console.log(usuario.value);
            console.log(senha.value);
        }
    })
})()









/*var $enviar = document.getElementsByName('enviar');
console.log($enviar);
$enviar.addEventListener('click', function() {
    let usuario = document.getElementsByName('name');
    let senha = document.getElementsByName('senha');
    console.log(usuario);
    console.log(senha);
});
*/
