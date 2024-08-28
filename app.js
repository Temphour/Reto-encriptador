// Añade un evento que escucha el clic en los botones.
// Cuando se hace clic en el botón, se llama a la respectiva funcion, encriptarTexto, desencriptarTexto, copiar texto.
document.getElementById('btnEncriptar').addEventListener('click', encriptarTexto);
document.getElementById('btnDesencriptar').addEventListener('click', desencriptarTexto);
document.getElementById('btnCopiar').addEventListener('click', copiarTexto);

//Eventos que escuchan el clic de los botones, llaman la funcion ocultar texto e imagenes (en el cuadro resultado)

document.getElementById('btnEncriptar').addEventListener('click', OcultarImagen);
document.getElementById('btnDesencriptar').addEventListener('click', OcultarImagen);
document.getElementById('btnEncriptar').addEventListener('click', OcultarTexto);
document.getElementById('btnDesencriptar').addEventListener('click', OcultarTexto);

// Función para ocultar la imagen
function OcultarImagen() {
    // Selecciona la imagen usando su id
    const imagen = document.getElementById('imagen');
    
    // Verifica que la imagen existe antes de intentar modificar su estilo
    if (imagen) {
        imagen.style.display = 'none';
    }
}


//Funcion para ocultar texto cuando se encripte o desencripte un texto
function OcultarTexto() {
    // Selecciona el texto usando su id
    const subtitulo = document.getElementById('subtitulo');
    const parrafo = document.getElementById('parrafo');
    const mensajeinicial = document.getElementById('mensaje-inicial');
    // Verifica que el mensaje existe antes de intentar modificar su estilo
    if (mensajeinicial) {
        parrafo.style.display = 'none';
        subtitulo.style.display = 'none';
    }
}

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
