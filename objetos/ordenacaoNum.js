let lojas = [
    {produto: 'bolo', valor: 50},
    {produto: 'frutas', valor: 30},
    {produto: 'pizza', valor: 60},
]

lojas.sort((a, b) => {
    if(a.valor > b.valor){
        return 1;
    } else if(a.valor < b.valor){
        return -1;
    } else{
        return 0;
    }
});

console.log(lojas);

/*
lojas.sort(); //ordem alfabetica
lojas.reverse(); //invertendo
*/