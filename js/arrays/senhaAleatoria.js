//essa foi gerada pelo chat GPT, estou deixando aqui caso seja necessário 
function gerarSenha() {
    return Math.random().toString(36).slice(2, 10);
}

console.log("Senha gerada:", gerarSenha());
