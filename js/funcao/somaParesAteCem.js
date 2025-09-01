let soma = 0;

for(let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        soma += i;        
    }
}

console.log(`A soma dos números pares até 10 é ${soma}.`)