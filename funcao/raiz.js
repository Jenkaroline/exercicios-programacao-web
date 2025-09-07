function somaQuadrados(num1, num2){
    const quadrado = x => x * x;

    let quadradoNum1 = quadrado(num1);
    let quadradoNum2 = quadrado(num2);

    return quadradoNum1 + quadradoNum2;
}

console.log(somaQuadrados(2, 3));