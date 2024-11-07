function calculadoraDeCadena(cadena) {
    if (cadena === "") return 0;

    let delimitadores = [',', '-'];
    let cadenaNumeros = cadena;

    if (cadena.startsWith("//[")) {
        const delimitadorPersonalizado = cadena.match(/\[(.*?)\]/)[1];
        cadenaNumeros = cadena.split("] ")[1];
        delimitadores = [delimitadorPersonalizado];
    }

    delimitadores.forEach(delimitador => {
        cadenaNumeros = cadenaNumeros.split(delimitador).join(',');
    });

    const numeros = cadenaNumeros.split(',');
    return numeros.reduce((acc, num) => acc + parseInt(num, 10), 0);
}

export default calculadoraDeCadena;