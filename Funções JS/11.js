
let user1 = new Object();
user1.nome = 'Roberto';
user1.email = 'robertoconradorc@gmail.com';

let user2 = new Object();
user2.nome = 'marcos';
user2.email = 'marcos@gmail.com';

let user3 = new Object();
user3.nome = 'marcela';
user3.email = 'marcela@gmail.com';


let users = new Array(user1, user2, user3);

console.log(users[0]);
let msg = '';
let x = 0;
while (users[x]) {
    console.log(users[x].nome);
    msg += 'Nome de usuário: ' + users[x].nome + ' <br> E-mail: ' + users[x].email + ' <br><hr>';
    x++;
}

document.querySelector('#output').innerHTML = msg;