(function() {
    window.addEventListener('load', init);
    function init() {
        let $paragrafos = document.querySelectorAll('p');
        let x = 0;
        while($paragrafos[x]) {
            $paragrafos[x].innerHTML = formatarTexto($paragrafos[x].innerHTML);
            x++;
        }
        function formatarTexto(texto) {
            let numeroMaximoCaracteres = 100;
            if (texto.length <= numeroMaximoCaracteres) return texto;
            let subTexto = texto.slice(0, numeroMaximoCaracteres);
            return subTexto + '...';
        }
    }
})()