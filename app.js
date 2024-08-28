// Añade un evento que escucha el clic en el botón con id 'btnEncriptar'.
// Cuando se hace clic en el botón, se llama a la función 'encriptarTexto'.
document.getElementById('btnEncriptar').addEventListener('click', encriptarTexto);

// Añade un evento que escucha el clic en el botón con id 'btnDesencriptar'.
// Cuando se hace clic en el botón, se llama a la función 'desencriptarTexto'.
document.getElementById('btnDesencriptar').addEventListener('click', desencriptarTexto);

// Añade un evento que escucha el clic en el botón con id 'btnCopiar'.
// Cuando se hace clic en el botón, se llama a la función 'copiarTexto'.
document.getElementById('btnCopiar').addEventListener('click', copiarTexto);

// Función para encriptar el texto
function encriptarTexto() {
    // Obtiene el valor del área de texto con id 'textoEntrada'
    const textoEntrada = document.getElementById('textoEntrada').value;
    
    // Reemplaza las letras en el texto con sus correspondientes secuencias encriptadas
    const textoEncriptado = textoEntrada
        .replace(/e/g, 'enter')  // Reemplaza 'e' con 'enter'
        .replace(/i/g, 'imes')   // Reemplaza 'i' con 'imes'
        .replace(/a/g, 'ai')     // Reemplaza 'a' con 'ai'
        .replace(/o/g, 'ober')   // Reemplaza 'o' con 'ober'
        .replace(/u/g, 'ufat');  // Reemplaza 'u' con 'ufat'

    // Muestra el resultado en el área de texto de salida
    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptarTexto() {
    // Obtiene el valor del área de texto con id 'textoEntrada'
    const textoEntrada = document.getElementById('textoEntrada').value;
    
    // Reemplaza las secuencias encriptadas con sus letras originales
    const textoDesencriptado = textoEntrada
        .replace(/enter/g, 'e')  // Reemplaza 'enter' con 'e'
        .replace(/imes/g, 'i')   // Reemplaza 'imes' con 'i'
        .replace(/ai/g, 'a')     // Reemplaza 'ai' con 'a'
        .replace(/ober/g, 'o')   // Reemplaza 'ober' con 'o'
        .replace(/ufat/g, 'u');  // Reemplaza 'ufat' con 'u'

    // Muestra el resultado en el área de texto de salida
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en el área de texto de salida
function mostrarResultado(texto) {
    // Obtiene el área de texto con id 'textoSalida'
    const textoSalida = document.getElementById('textoSalida');
    
    // Establece el valor del área de texto de salida al texto proporcionado
    textoSalida.value = texto;
    
    // Elimina la clase 'oculto' para hacer visible el área de texto de salida
    textoSalida.classList.remove('oculto');
    
    // Elimina la clase 'oculto' del botón de copiar para hacerlo visible
    document.getElementById('btnCopiar').classList.remove('oculto');
}

// Función para copiar el texto del área de texto de salida al portapapeles
function copiarTexto() {
    // Obtiene el área de texto con id 'textoSalida'
    const textoSalida = document.getElementById('textoSalida');
    
    // Selecciona el texto en el área de texto de salida
    textoSalida.select();
    
    // Ejecuta el comando para copiar el texto seleccionado al portapapeles
    document.execCommand('copy');
    
    // Muestra una alerta indicando que el texto ha sido copiado al portapapeles
    alert('Texto copiado al portapapeles');
}
