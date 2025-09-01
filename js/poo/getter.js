class Pessoa {
    idade = 15;

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return this.firstName + " " + this.lastName;
    }

    get age(){
        return this.idade;
    }
}

let p1 = new Pessoa("Caio", "Junqueira");
let p2 = new Pessoa("Anderson", "Silva");
let p3 = new Pessoa("José", "Maria");

console.log(p1.fullName);
console.log(p2.fullName);
console.log(p3.fullName);