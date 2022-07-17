
(function () {
    'use strict';
    let $enviar = document.getElementById('submit');
    let $check = document.getElementById('check');
    $enviar.disabled = toogleCheck();

    $check.addEventListener('change', function () {
        /*
        if (this.checked) {
            $enviar.disabled = false;
        } else {
            $enviar.disabled = true;
        }
        */
        $enviar.disabled = toogleCheck();
    });
    function toogleCheck() {
        return !$check.checked;
    }
})()