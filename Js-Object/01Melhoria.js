// Melhoria do codigo 01Problema.js 

//Com um array contendo os três objetos.

var pessoa1 = {
    nome: 'roberto',
    sobrenome: 'conrado'
};
var pessoa2 = {
    nome: 'marcia',
    sobrenome: 'cunha'
};
var pessoa3 = {
    nome: 'marcos',
    sobrenome: 'lima'
};

var pessoas = [
    pessoa1,
    pessoa2,
    pessoa3
];

var x = 0;
while(pessoas[x]) {
    console.log(pessoas[x].nome + ' ' + pessoas[x].sobrenome);
    x++;
}