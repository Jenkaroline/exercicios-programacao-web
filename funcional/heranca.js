/* const user = {
    name: '',
    email: '',
    senha: '',
    nivelAcesso: 1
}

const userNormal = {
    ...user,
    name: 'jen',
    email: 'jen@a.com',
    senha: '123'
}

const admin = {
    ...user,
    name: 'leo',
    email: 'leo@a.com',
    senha: '321',
    nivelAcesso: 2
}

console.log(userNormal);
console.log(admin); */

function createUser(nome, email, senha, nivel){
    return{
        nome,
        email,
        senha,
        nivel
    }
}

let user = createUser("Jenni","jen@ol.com","123");
let admin = createUser("Leo","leo@ol.com","123", 2);

console.log(user);
console.log(admin);