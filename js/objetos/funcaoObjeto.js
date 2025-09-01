let pessoa = {
    nome: "Bruna ",
    sobrenome: "Oliveira",

    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
};

console.log(pessoa.nomeCompleto());