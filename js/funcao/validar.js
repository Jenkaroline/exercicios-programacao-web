function validar(usuario, senha){
    if(usuario == "Pedro" && senha == 123){
        return true;
    } else{
        return false;
    }
}

resultado = validar("Pedro", 123);

if(resultado){
    console.log("Acesso liberado!");
} else{
    console.log("Acesso negado!");
}
