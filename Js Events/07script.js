
(function(){
    let $lista = document.querySelector('ul');
    let $input = document.getElementById('txtTask');
    let $lis = $lista.querySelectorAll('li');
    let $button = document.getElementById('btn');

    $button.addEventListener('click', addTask);
    $input.addEventListener('keyup', function(e){
        if (e.key === 'Enter') {
            addTask();// add tarefa apertando tecla enter
        }
    });
    for (let i = 0; i < $lis.length; i++) {
        addEvent($lis[i]);
    }
    function toggleDone() {
        this.classList.toggle('tDone');
    }
    function addTask(){
        let li = document.createElement('li');
        let text = document.createTextNode($input.value);
        li.appendChild(text);
        $lista.appendChild(li);

        $input.value = '';
        $input.focus();
        addEvent(li);
    }
    function addEvent(li) {
        li.addEventListener('click', toggleDone);
    }
})()