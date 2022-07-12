
let produtos = [
    {"nome": 'caneta', 'preco': 1.2},
    {"nome": 'caderno', 'preco': 10},
    {"nome": 'borracha', 'preco': 0.5},
];

let msg = "";

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i].preco);
    msg += "<h2>Produto: " + produtos[i].nome + "</h2>";
    msg += "<p>Preco: " + produtos[i].preco + "</p>";
}

document.getElementById('output').innerHTML = msg;