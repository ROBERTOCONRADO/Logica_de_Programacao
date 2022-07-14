function caucularMedia() {
    let total = 0;
    let qtd = arguments.length;
    let x = 0;

    while(typeof arguments[x] === 'number') {
        total += arguments[x];
        x++;
    }
    return total / qtd;
}