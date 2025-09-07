function maiorDeIdade(idade){
    if(idade >= 18){
        return true
    } else{
        return false
    }
}

let verificacao = maiorDeIdade(2);

if(verificacao){
    console.log("É maior!")
} else{
    console.log("É menor!")
}