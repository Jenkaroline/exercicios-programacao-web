function calcImovel(metragem, quartos){
    let metro_quadrado = 3000;

    switch(quartos){
        case 1:
            preco = metragem * metro_quadrado;
        break;
        case 2:
            preco = metragem * (1.2 * metro_quadrado);
        break;
        case 3:
            preco = metragem * (1.5 * metro_quadrado);
        break;
        default:
            "Quantidade inválida.";
    }
    return preco;
}

let metragem = 500;
quartos = 1;
 
console.log(calcImovel(metragem, quartos))