function calculadoraDeCadena(cadena) {
    const numeros = cadena.split(",");
    let resultado = 0;
    
    if (cadena !== "") {
        resultado = numeros.reduce((acc, num) => acc + parseInt(num, 10), 0);
    }
    
    return resultado;
}

export default calculadoraDeCadena;