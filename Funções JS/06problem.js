
produtos = new Array('maça', 'pêra', 'limão', 'tomate', 'morango', 'uva', 'banana', 'abacate', 'laranja', 'goiaba');

let produtosDisponible = document.getElementById('produtosDisponible');

let msg = '';

for (var i = 0; i < produtos.length; i++) {
    msg += 'produto ' + (i + 1) + ': '+ produtos[i] +'<br>';
}

produtosDisponible.innerHTML = msg; 