let ano = 1004;

while (ano <= 2022) {
    if (!(ano % 100 === 0) || (ano % 400 === 0)) {
        document.write(ano + '<br>');
    } else {
        document.write(ano + 'Não é bissexto<br>');
    }
    
    ano += 4;
}