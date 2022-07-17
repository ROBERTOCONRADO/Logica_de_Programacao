

(function() {
    'use strict';
    let $btns = document.getElementsByTagName('button');
    
    for (let i = 0; i < $btns.length; i++) {//loop
        $btns[i].addEventListener('click', clicou);
    }

    function clicou() {
        console.log(this.textContent);
    }
})();