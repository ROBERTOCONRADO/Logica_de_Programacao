
(function() {
    let trs = document.querySelectorAll('.js-tabela tbody .aluno');
    let x = 0;
    while (trs[x]) {
        let linhaAluno = trs[x];
        console.log(linhaAluno);
        let n1, n2, n3, n4, media;
        let tds = linhaAluno.querySelectorAll('td')
        console.log(tds);

        n1 = pegaNota(tds[1]);
        n2 = pegaNota(tds[2]);
        n3 = pegaNota(tds[3]);
        n4 = pegaNota(tds[4]);

        media = caucularMedia(n1, n2, n3, n4);

        linhaAluno.querySelector('.aluno-media').textContent = media;

/*      n1 = parseFloat(tds[1].textContent);
        n2 = parseFloat(tds[2].textContent);
        n3 = parseFloat(tds[3].textContent);
        n4 = parseFloat(tds[4].textContent);
*/               
        x++;
    }

    function pegaNota(td) {
        return parseFloat(td.textContent);
    }
}) ()