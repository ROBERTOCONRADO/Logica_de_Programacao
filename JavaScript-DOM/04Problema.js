

let txt = document.querySelector('#txtNome');
let nome = "Roberto ";// Posso atribuir o espaço logo apos o "o" para não necessitar concatenar nome + " " + sobrenome;
let sobrenome = "Conrado da Rocha";

document.querySelector('#txtNome').value = nome + sobrenome;
document.querySelector('#txtNome').disabled = true;
