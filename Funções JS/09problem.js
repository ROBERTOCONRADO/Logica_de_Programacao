
let produto1 = new Object();
    produto1.Nome = 'Caneta';
    produto1.Preco = 1.2;
    produto1.Estoque = 250;

    
    produto1.comprar = function() {
        alert('Compra concluida!');
        this.Estoque--;
        alert('Restam: ' + this.Estoque + ' Canetas!' );
        produto1.Estoque = produto1.Estoque--;

        let msg = '';

        msg += 'Nome: ' + produto1.Nome + '<br>' ;
        msg += 'Preco: ' + produto1.Preco + '<br>' ;
        msg += 'Estoque: ' + produto1.Estoque + '<br>' ;

        document.querySelector('#output').innerHTML = msg;
    }
    
    
    

