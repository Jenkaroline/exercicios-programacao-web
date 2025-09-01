let numeros = [1, 2, 3, 4];
let i = 0;
let n = 0;

console.log("Forma 1:");
while(i < numeros.length){
    console.log(numeros[i]);

    i++;
}

console.log("Forma 2:");
while(n in numeros){
    console.log(numeros[n]);

    n++;
}
