function curioso() {
    'use strict';
    let paragrafos = document.querySelectorAll('p');
    let x = 0;
    while (paragrafos[x]) {
        paragrafos[x].textContent = 'Página Hackeada com sucesso!'
        x++;
    }
}
