//Exercicios separados  01 index// 
var numero = prompt("Digíte um número ");
numero = parseFloat(numero);
var numero2 = prompt("Digíte outro número");
numero2 = parseFloat(numero2);
subtracao = (numero - numero2);
divisao = (numero / numero2);
soma = (numero + numero2);
alert("A subtração de " + numero + " - " + numero2 + " é: " + subtracao);
alert("A multiplicação é " + (numero * numero2));
alert("A divisão é " + divisao + " E a soma é " +soma);


//=============02index========================================
var n1 = prompt("Digite um número");
n1 = parseInt(n1);
var n2 = prompt("Digite outro número");
n2 = parseInt(n2);
var n3 = prompt("Digite um número");
n1 = parseInt(n3);
var n4 = prompt("Digite outro número");
n2 = parseInt(n4);
var n5 = prompt("Digite um número");
n1 = parseInt(n5);
var n6 = prompt("Digite outro número");
n2 = parseInt(n6);
var n7 = prompt("Digite um número");
n1 = parseInt(n7);
var n8 = prompt("Digite outro número");
n2 = parseInt(n8);
var media =  (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8) / 2;
alert(media);        


//============03index=========================================
let numero = prompt("digite um numero");
numero = parseInt(numero);
let numero2 = prompt("digite outro numero");
numero2 = parseInt(numero2);
alert("o resto da divisão de " + numero + " por " + numero2 + " é: " + (numero % numero2));
alert("O numero " + numero + " elevado a " + numero2 + " é: " + (numero ** numero2));


//==============04index======================================
let numero1 = prompt("Digite um número");
let numero2 = parseFloat(prompt("Digite outro número"));// forma abreviada//
numero1 = parseFloat(numero1);
let media = (numero1 + numero2) / 2 ;
alert(media > 5);// vai retornar true ou false //


//============05index========================================
let n1 = parseFloat(prompt("Digite um número"));
let n2 = parseFloat(prompt("Digite outro número"));
let media = (n1 + n2) / 2;
if (media >= 5 ) {
    alert("Aprovado!");
} else {
    alert("Reprovado!");
}


//=============06index===================================
let jogador1 = parseInt(prompt("Jogador 1 Digite um número"));//Fazer jogador1 digitar um número
let jogador2 = parseInt(prompt("Jogador 2 Digite um número"));//Fazer jogador2 digitar um número

if (jogador1 === jogador2) {
    alert("Ouve um empate!");
//Se forem iguais mostrar mensagem 'empate' e encerrar o programa
} else {
        let numeroSorteado = parseInt(Math.random() * 2);
        //Se forem diferentes, sortear um número entre 0 e 1
    
    if (numeroSorteado === 0) {//Se o número sorteado for 0, ganha quem escolher o número MENOR
        if (jogador1 < jogador2) {
            alert("Jogador 1 é o Vencedor!");
        } else {
            alert("Joagador 2 é o Vencedor!");
        }
    } else {//senão, ganha quem escolher o número MAIOR.
        if (jogador1 > jogador2) {
            alert("Jogador 1 é o Vencedor!");
        } else {
            alert("Jogador 2 é o Vencedor!");
        }
    }
}
// Outra forma de resolver
    if (numeroSorteado === 0 && jogador1 < jogador2 || numeroSorteado === 1 && jogador1 > jogador2) {
    alert("Jogador 1 é o Vencedor!");
    } else {
    alert("Jogador 2 é o Vencedor!");
    }


//============07index======================================
let nota1 = parseFloat(prompt("Digite um número"));
let nota2 = parseFloat(prompt("Digite um número"));
let media = (nota1 + nota2) / 2;
if (nota1 > 0 && nota2 > 0 && media > 5) {
    alert("Parabéns, você foi aprovado!");
} else {
    alert("Reprovado! Estude um pouco mais.");
}


//==============08index====================================
let n1 = parseFloat(prompt("Digite um número"));
        let n2 = parseFloat(prompt("Digite outro número"));
        let media = (n1 + n2) / 2;
        if (media > 5 && n1 > 1 && n2 > 1) {
            alert("Você foi aprovado!");
        } else {
            alert("Você foi reprovado!");
        }

        // Outra forma de resolver //

        if (n1 <= 1 || n2 <= 1 || media <= 5 ) {
            alert("Você foi reprovado!");
        } else {
            alert("Você foi aprovado!");
        }


//==============09index====================================
let numero = parseInt(prompt("Digite um número de 1 a 6."));
switch (numero) {
    case 1:
       alert("O número escolhido foi 1");
       break;
    case 2:
       alert("O número escolhido foi 2");
       break;
    case 3:
       alert("O número escolhido foi 3");
       break;
    case 4:
       alert("O número escolhido foi 4");
       break;
    case 5:
       alert("O número escolhido foi 5");
       break;
    case 6:
       alert("O número escolhido foi 6");
       break;   
    default: 
        alert("Escolha um número de 1 a 6 !")   
}
