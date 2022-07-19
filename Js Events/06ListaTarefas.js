
(function(){
    let $lista = document.querySelector('ul');
    let $input = document.getElementById('txtTask');
    let $button = document.getElementById('btn');

    $button.addEventListener('click', addTask);
    $input.addEventListener('keyup', function(e){
        if (e.key === 'Enter') {
            addTask();// add tarefa apertando tecla enter
        }
    });
    function addTask(){
        let task = '<li>' + $input.value + '</li>';
        $lista.innerHTML += task;

        $input.value = '';
        $input.focus();
    }
})()