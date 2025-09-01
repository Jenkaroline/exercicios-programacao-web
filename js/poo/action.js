class Pessoa{
    passos = 0;
    
    constructor(name, idade){
        this.name = name;
        this.idade = idade;
    }

    andar(){
        this.passos++;
    }
}

let p1 = new Pessoa("Marcos", 12);
p1.andar();

console.log(p1);
console.log(p1.passos);