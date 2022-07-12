let numero = parseFloat(prompt("Digite um número!"));

let indice = 1;

while (indice <= 500) {
    document.write(numero + 'x ' + indice + ' = ' +(numero * indice) + ' <br>');
    indice = indice + 1;

    if(indice % 10 === 0 && indice > 0) {//add lines
        document.write('<hr>');
    }
}
document.write('Saiu do loop' + ' <br>');  

//Outra forma de fazer usando "for" 

let numero1 = parseFloat(prompt("Digite um número!"));

for (let i = 1; i <= 500; i++) {
    document.write( numero1 + ' x ' + i + ' = ' + (numero1 * i) + ' <br>');
}
document.write('Saiu do loop');