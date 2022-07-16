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


for (let i = 1; i <= 3; i++) {
    console.log(window['pessoa'+i].nome + ' ' + window['pessoa'+i].sobrenome);
}



