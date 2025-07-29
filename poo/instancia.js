class Pessoa {
    nacionalidade = "brasileiro(a)";

    constructor(meuNome, minhaIdade){
        this.name = meuNome,
        this.age = minhaIdade
    }
}

let p1 = new Pessoa("João", 12);
let p2 = new Pessoa("Caio", 6);
let p3 = new Pessoa("Pedro", 9);

console.log(`A idade do ${p3.name} é ${p3.age} anos.`);
console.log(`O ${p2.name} é ${p3.nacionalidade}.`);
console.log(p3);