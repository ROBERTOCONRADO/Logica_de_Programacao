
(function() {
    let trs = document.querySelectorAll('.js-tabela tbody .aluno');
    let x = 0;
    while (trs[x]) {
        let linhaAluno = trs[x];
        
        let tds = linhaAluno.querySelectorAll('td')
    
        let notas = recuperarNotas(tds);

        let media = calcularMedia.apply(this, notas);

        linhaAluno.querySelector('.aluno-media').textContent = media;              
        x++;
    }

    function recuperarNotas(tds) {
        let x = 0;
        var arr = [];
        while (tds[x] ) {
            if (!isNaN(tds[x].textContent) && tds[x].textContent !== '') {
                arr.push( parseFloat(tds[x].textContent ) );
            }
            x++;
        }
        return arr;
    }
}) ()