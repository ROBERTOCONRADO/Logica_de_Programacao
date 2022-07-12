
let arr = new Array(45, 82, 72, 47, 12, 63, 1, 48, 46, 15, 24);

let soma = 0;
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);

    if ( !isNaN(arr[i] ) && arr[i] % 2 === 0) {
        soma += arr[i];
    }
}
alert('A soma dos números é: ' + soma);