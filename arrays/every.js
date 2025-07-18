let frutas = ['banana', 'uva', 'maracuja'];

let frutasFiltro = frutas.every((value) =>{
    /*
    if(value.length > 3){
        return true;
    } else{
        return false;
    }
    ou simplificando: 
    */

    return value.length > 3;
});

if(frutasFiltro){
    console.log("Todos são maiores que 3.");
} else{
    console.log("Não são maiores que 3.");
}
