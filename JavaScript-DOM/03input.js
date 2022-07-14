

function escreve() {
    var txtNome = document.getElementById('inputName').value;
    document.getElementById('msg').innerHTML = 'Welcome, <b>' + txtNome + '</b>.';
}