function calculadoraDeCadena(cadena) {
    const numeros = cadena.split(",");
    if (cadena === "") {
      return 0;
    }
    else{
        return numeros.reduce((acc,num) => acc + parseInt(cadena,10),0);
    }
  }
  
  
  export default calculadoraDeCadena;