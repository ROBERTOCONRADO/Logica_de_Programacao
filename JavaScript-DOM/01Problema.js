//=============FORMA 1================
(function() {
    var nome = prompt('What is your name?');
    document.getElementById('msg').textContent = 'Welcome, ' + nome + '.';
}) ()




//================Forma 2===============
let usuário = prompt('What is your name?');
document.getElementById('msg').innerHTML = 'Bem-Vindo, ' + usuário;
