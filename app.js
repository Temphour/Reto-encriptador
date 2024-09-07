// Añade un evento que escucha el clic en los botones.
// Cuando se hace clic en el botón, se llama a la respectiva función encriptarTexto, desencriptarTexto, copiarTexto.
document.getElementById('btnEncriptar').addEventListener('click', encriptarTexto);
document.getElementById('btnDesencriptar').addEventListener('click', desencriptarTexto);
document.getElementById('btnCopiar').addEventListener('click', copiarTexto);

// Función para validar el texto de entrada
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;  // Solo letras minúsculas y espacios
    // Elimina acentos y verifica si el texto está compuesto solo por letras minúsculas y espacios
    const textoNormalizado = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Elimina acentos
    return regex.test(textoNormalizado) && texto === textoNormalizado; // Verifica letras minúsculas, ausencia de acentos y espacios
}

// Función para mostrar un mensaje de error y limpiar el texto de salida
function mostrarError(mensaje) {
    alert(mensaje);
    // Limpia el área de texto de salida
    const textoSalida = document.getElementById('textoSalida');
    textoSalida.value = '';
    // Oculta el área de texto de salida y el botón de copiar
    textoSalida.classList.add('oculto');
    document.getElementById('btnCopiar').classList.add('oculto');
    // Muestra la imagen y el texto
    MostrarImagenError();
    MostrarTexto();
    // Cambia el texto del subtitulo y del párrafo
    cambiarTexto('subtitulo', 'El texto ingresado es inválido');
    cambiarTexto('parrafo', 'Ingresa un texto nuevamente, en minúscula y sin acentos');
}

// Función para ocultar la imagen
function OcultarImagen() {
    const imagen = document.getElementById('imagen');
    if (imagen) {
        imagen.style.display = 'none';
    }
}

// Función para ocultar texto
function OcultarTexto() {
    const subtitulo = document.getElementById('subtitulo');
    const parrafo = document.getElementById('parrafo');
    const mensajeinicial = document.getElementById('mensaje-inicial');
    if (mensajeinicial) {
        parrafo.style.display = 'none';
        subtitulo.style.display = 'none';
    }
}

// Función para mostrar la imagen de error
function MostrarImagenError() {
    const imagen = document.getElementById('imagen');
    if (imagen) {
        imagen.style.display = 'block'; // Muestra la imagen
        imagen.src = './imagenes/noencontrado.jpg'; 
    }
}

// Función para mostrar la imagen (general)
function MostrarImagen() {
    const imagen = document.getElementById('imagen');
    if (imagen) {
        imagen.style.display = 'block'; // Muestra la imagen
        imagen.src = './imagenes/descifrar.jpg'; // Reestablece la fuente original de la imagen
    }
}

// Función para mostrar texto
function MostrarTexto() {
    const subtitulo = document.getElementById('subtitulo');
    const parrafo = document.getElementById('parrafo');
    const mensajeinicial = document.getElementById('mensaje-inicial');
    if (mensajeinicial) {
        parrafo.style.display = 'block';
        subtitulo.style.display = 'block';
    }
}

// Función para cambiar el texto de un elemento HTML
function cambiarTexto(id, nuevoTexto) {
    // Obtiene el elemento por su id
    const elemento = document.getElementById(id);
    
    // Verifica si el elemento existe antes de intentar cambiar su texto
    if (elemento) {
        // Cambia el texto del elemento utilizando textContent
        elemento.textContent = nuevoTexto;
    } else {
        console.warn(`Elemento con id ${id} no encontrado.`);
    }
}

// Función para encriptar el texto
function encriptarTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    
    if (!validarTexto(textoEntrada)) {
        mostrarError('El texto solo puede contener letras minúsculas sin acentos.');
        return; // No continuar si el texto no es válido
    }
    
    const textoEncriptado = textoEntrada
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    
    OcultarTexto();
    OcultarImagen();
    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptarTexto() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    
    if (!validarTexto(textoEntrada)) {
        mostrarError('El texto solo puede contener letras minúsculas sin acentos.');
        return; // No continuar si el texto no es válido
    }
    
    const textoDesencriptado = textoEntrada
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    OcultarTexto();
    OcultarImagen();
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en el área de texto de salida
function mostrarResultado(texto) {
    const textoSalida = document.getElementById('textoSalida');
    textoSalida.value = texto;
    textoSalida.classList.remove('oculto');
    document.getElementById('btnCopiar').classList.remove('oculto');
}

// Función para copiar el texto del área de texto de salida al portapapeles
function copiarTexto() {
    const textoSalida = document.getElementById('textoSalida');
    textoSalida.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
