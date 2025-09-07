function createPerson(nome, sobrenome, apelido, idade){
    return {
        nome,
        sobrenome,
        apelido,
        idade
    }
}

let p1 = createPerson("Jennifer", "Karoline", "Jenika", 19);
let p2 = createPerson("Epaminondas", "Trigueiro", "Meu bem <3", 26);

console.log(p1);
console.log(p2);