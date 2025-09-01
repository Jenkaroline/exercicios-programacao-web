class Person{
	idade = 16;
	
	constructor(nome){
		this.nome = nome;
	}
}

class Aluno extends Person{
	constructor(name, id){
		super(name); //esse super é uma variante do this, se refere a classe pai
		this.id = id;
	}
}

let p1 = new Aluno("Jenika", 1);

console.log(`${p1.nome} tem ${p1.idade} e seu id é ${p1.id}.`);