let frutas = ['banana', 'uva', 'maracuja'];

let frutasSome = frutas.some((value) => {
    /*
    if(value.length > 3){
        return true;
    } else{
        return false;
    }
    */
    return value.length > 3;
})

if(frutasSome){
    console.log("Alguma fruta é maior que 3.")
} else{
    console.log("Nenhuma fruta é maior que 3.")
}