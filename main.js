// Precios para socios y no socios
const precios = {
    socio: 15000,    // Precio para socios
    noSocio: 20000   // Precio para no socios
};

// Función principal para gestionar la reserva
function gestionarReserva() {
    alert("Bienvenido al simulador de reservas de canchas de fútbol.");

    // Preguntar si el usuario es socio
    const esSocio = confirm("¿Eres socio del club? (Presiona OK para Sí, Cancelar para No)");

    if (esSocio) {
        alert("¡Hola, socio del club!");
        const numeroSocio = obtenerNumeroSocio();
        realizarReserva(precios.socio, numeroSocio); // Actualiza la función para incluir el número de socio
    } else {
        alert("¡Hola, visitante!");
        solicitarDatosNoSocio();
    }
}

// Función para solicitar datos de no socios y mostrar el precio
function solicitarDatosNoSocio() {
    const nombre = prompt("Por favor, ingresa tu nombre:");
    const apellido = prompt("Por favor, ingresa tu apellido:");

    if (nombre && apellido) {
        alert(`Gracias, ${nombre} ${apellido}!`);
        realizarReserva(precios.noSocio);
    } else {
        alert("Debes completar todos los campos.");
        solicitarDatosNoSocio(); // Reintenta si los datos están incompletos
    }
}

// Función para manejar la reserva de la cancha
function realizarReserva(precio, numeroSocio) { // Actualiza la función para aceptar el número de socio como parámetro opcional
    const canchas = ["Cancha 1", "Cancha 2", "Cancha 3"];
    let canchaSeleccionada;

    for (let i = 0; i < canchas.length; i++) {
        canchaSeleccionada = prompt(`Selecciona el número de cancha (1, 2 o 3):\n${canchas.join("\n")}`);
        if (canchaSeleccionada >= 1 && canchaSeleccionada <= 3) {
            alert(`Has reservado ${canchas[canchaSeleccionada - 1]}. Precio: $${precio}. ¡Gracias por tu reserva!`);
            return; // Sale de la función después de una reserva exitosa
        } else {
            alert("Número de cancha inválido. Por favor, elige un número entre 1 y 3.");
        }
    }
    alert("Número de cancha inválido tras varios intentos. Por favor, inténtalo de nuevo.");
}

// Función para obtener el número de socio
function obtenerNumeroSocio() {
    const numero = prompt("Por favor, ingresa tu número de socio:");
    if (!numero || numero.trim().length === 0) {
        alert("Debes ingresar tu número de socio.");
        return obtenerNumeroSocio(); // Reintenta si el número está vacío
    }
    return parseInt(numero, 10);
}
// Iniciar el simulador
gestionarReserva();
