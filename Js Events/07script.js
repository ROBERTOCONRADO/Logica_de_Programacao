
(function(){
    let $lista = document.querySelector('ul');
    let $input = document.getElementById('txtTask');
    let $lis = $lista.querySelectorAll('li');
    let $button = document.getElementById('btn');

    $button.addEventListener('click', addTask);
    $input.addEventListener('keyup', function(e){
        if (e.key === 'Enter') {
            addTask();
        }
    });
    
    $lista.addEventListener('click', function(e){
        if (e.target.nodeName === 'LI') {
            removeTask(e.target);
        }
    });
    function removeTask(li) {
        if(confirm('Deseja realmente excluir a tarefa \n ' + li.textContent + '?')) {
            console.log(li.parentNode);
            li.parentNode.removeChild(li);
        }
    }

    function addTask(){
        let li = document.createElement('li');
        let text = document.createTextNode($input.value);
        li.appendChild(text);
        $lista.appendChild(li);

        $input.value = '';
        $input.focus();
    }
})()