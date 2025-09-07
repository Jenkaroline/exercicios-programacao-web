class Pessoa{
    static hands = 2;
    
    constructor(nome){
        this.nome = nome;
    }

    static saudacao(){
        console.log("Oie!");
    }
}

let p1 = new Pessoa("Joana");

console.log(`A ${p1.nome} tem ${Pessoa.hands} mãos.`);
Pessoa.saudacao();