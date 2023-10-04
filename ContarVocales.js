function contarVocales(cadena) {
    const vocales = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];
    let contador = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      if (vocales.includes(cadena[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  

  const texto = "Este es un ejemplo con áéíóú ÁÉÍÓÚ";
  const cantidad = contarVocales(texto);
  console.log(`En el texto: "${texto}" hay ${cantidad} vocales con acento.`);
  