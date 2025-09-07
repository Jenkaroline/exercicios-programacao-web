let frutas = ['banana', 'uva', 'maracuja'];

let frutasFiltro = frutas.filter((item) =>{
    /*
    if(item.length > 4){
        return true;
    } else{
        return false;
    }
    ou simplificando: 
    */

    return item.length > 4;
});
    console.log(frutasFiltro);
