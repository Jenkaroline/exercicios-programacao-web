//for com arrays e objetos
let numeros = [1, 2, 3, 4, 5];

let cores = [
    {fundo: 'azul', fonte: 'preto'},
    {fundo: 'cinza', fonte: 'marrom'},
    {fundo: 'vermelho', fonte: 'rosa'},
];

console.log("Forma 1:");
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
} 

console.log("\n Forma 2 (simplificada) --> i é o índice:");
for(let i in numeros){
    console.log(numeros[i]);
}

console.log("\n Forma 3 (simplificada) --> cor são os valores:");
for(let num of numeros){
    console.log(num);
}

console.log("\n Ambos podem acessar propriedades específicas em objetos.");
console.log("\n Forma 1:");

for(let i in cores){
    cores[i].fonte = cores[i].fonte.toUpperCase(); 
};
console.log(cores);
 

console.log("\n Forma 2:");

for(let cor of cores){
    console.log(cor.fonte);
};

