let produtos = [
    {nome: 'queijo', preco: 19, categoria: 'comida'},
    {nome: 'carne', preco: 60, categoria: 'higiene'},
    {nome: 'margarina', preco: 5, categoria: 'comida'},
    {nome: 'boneca', preco: 5, categoria: 'brinquedos'}
];

const categoriaProduto = produtos.filter(produtos => {
    if(produtos.categoria == 'comida'){
        produtos.preco = produtos.preco + produtos.preco * 0.1;
    }
    return produtos;
});

console.log(categoriaProduto);