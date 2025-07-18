function calcPct(num1, num2){
    let resultado = num1/100 * num2; 
    return `${num1}% de ${num2} é ${resultado}.`
}

console.log(calcPct(10, 100));
console.log(calcPct(40, 50));