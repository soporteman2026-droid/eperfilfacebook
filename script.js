function cambiarcolorbody() {
    document.body.style.backgroundColor = "black";
}


function cambiarcolorcontenedor() {
    const contenedor = document.querySelector('.contenedor'); // Selecciona el elemento con la clase "contenedor"
    contenedor.style.backgroundColor = "black"; // Cambia el color de fondo del contenedor a negro
}


function cambiarcolortarjeta() {
    const tarjetas = document.querySelectorAll('.tarjeta'); // Selecciona todos los elementos con la clase "tarjeta"
    const imagen = document.querySelectorAll('img'); // Selecciona la imagen del contenedor
    
    tarjetas.forEach(tarjeta => { // Itera sobre cada tarjeta para aplicar el cambio de color
        tarjeta.style.backgroundColor = "black"; // Cambia el color de fondo de la tarjeta a negro
        tarjeta.style.color = "white"; // Cambia el color del texto a blanco para que sea legible
        
    });

    imagen.forEach(img =>{
        img.style.filter = 'drop-shadow(8px 8px 12px rgb(250, 247, 247))'; // Aplica un filtro de brillo al 50%

    });
}



function restablecertodo(){
    location.reload();
}


function CambiarEstado (miBoton) {
    if (miBoton.innerText === "Seguir") 
    { 
        miBoton.innerText = "Siguiendo";
        miBoton.style.background = "#42b72a";
    } 
    else 
    {
        miBoton.innerText = "Seguir";
        miBoton.style.background = "#1877f2";
    }
        
}


function mostrarPerfil (perfilDetalle) 
{
    const tarjeta = perfilDetalle.closest(".tarjeta"); // Comienza a buscar desde el mismo elemento (perfilDetalle) y empieza a subir hacia arriba por la estructura del html (Hacia los elementos padres) hasta encontrar el class="tarjeta"

    const detalle = tarjeta.querySelector(".perfilDetalle");// Le ordena al navegador: "Busca UNICAMENTE dentro de la caja tarjeta que seleccioné antes, no te salgas del resto de la página, busca el class="perfilDetalle" y guárdalo en la variable detalle"

    const botonPerfil = tarjeta.querySelector(".perfilBoton"); //Esta instruccion sirve para buscar y seleccionar el botón de "Ver perfil" que pertenece únicamente a esa tarjeta en particular.

    const mostrar = detalle.hidden; // Esta instruccion sirve para saber si la tarjeta de perfil está oculta o no. El valor sera true si está oculto y false si está visible.

    detalle.hidden = !mostrar;// Esta instruccion sirve para cambiar el estado de la tarjeta de perfil. Si esta oculta, la muestra; si esta visible, la oculta. 

    tarjeta.classList.toggle("girada", mostrar); // Esta instruccion sirve para agregar o quitar la clase "girada" a la tarjeta. Si la tarjeta estaba oculta, se le agrega "girada; si estaba visible, se le quita la clase "girada". 

    botonPerfil.innerText = mostrar ? "ocultar perfil" : "Ver perfil"; // Esta instruccion sirve para cambiar el texto del boton de Ver Perfil. Si la tarjeta estaba oculta, el botón dirá "ocultar Perfil"; si estaba visible, dirá "verperfil"

}

document.querySelectorAll(".perfilDetalle").forEach(detalle => { // Esta instruccion sirve para seleccionar todos los botones de "Verperfil" en la pagina y agregarles un evento de clic.

    detalle.addEventListener("click", (evento) => { // Esta instrucción sirve para agregar un evento de clic a cada botón de "Ver Perfil". Cuando se hace clic en el boton, se ejecuta la funcion mostrarPerfil.

        if (evento.target.closest(".volverBoton")) return; // Esta instruccion sirve para evitar que se ejecute la funcion "mostrarPerfil" si el clic se hizo en el botón  de "volver", la funcion termina y no hace nada mas.

        mostrarPerfil(detalle); // Esta instruccion sirve para llamar a la funcion "mostrarPerfil" y pasarle el botón de "Verperfil" que se hizo clic como argumento. Esto hace que se muestre u oculte la tarjeta de perfil correspondiente.

    });
});

// Lee en voz alta el texto escrito junto al botón usando la síntesis de voz del navegador.
function speak(boton) { // Declara la función y recibe el botón que se pulsó.
    // 1. Encontramos el input específico que está al lado del botón que se presionó
    const inputAsociado = boton.previousElementSibling; // Obtiene el elemento que aparece justo antes del botón.
    
    // 2. Extraemos el texto que el usuario escribió dentro de ese input
    const texto = inputAsociado.value; // Guarda el contenido escrito en el campo de texto.

    // 3. Validamos que el input no esté vacío
    if (!texto.trim()) { // Comprueba si el texto está vacío o solo contiene espacios.
        alert("Por favor escribe algo primero."); // Muestra un aviso para solicitar texto.
        return; // Detiene la función para no intentar leer un texto vacío.
    }

    // 4. Creamos el objeto de voz con la API nativa del navegador
    const utterance = new SpeechSynthesisUtterance(texto); // Prepara el texto para convertirlo en voz.
    utterance.lang = 'es-ES'; // Configura la voz para español de España.
    
    // 5. Cancelamos cualquier voz anterior para que no se encimen y reproducimos la nueva
    window.speechSynthesis.cancel(); // Detiene una lectura anterior si todavía está en curso.
    window.speechSynthesis.speak(utterance); // Reproduce en voz alta el texto preparado.
} // Finaliza el bloque de instrucciones de la función.

