let person = {
    nome: "Jenni",
    sobrenome: "Karol",
    apelido: "Jenika",
    idade: 19,
    getFullName(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(person.getFullName());