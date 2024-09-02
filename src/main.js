// Precios base de los artículos
const preciosBase = {
    almohadones: 26000,
    mantas: 32000,
    canastas: 11000,
    carteras: 16000,
    puff: 10000,
    botellones: 12000,
    spray: 15000,
    dispensers: 13000
};

// Opciones de colores y aromas
const coloresDisponibles = ["gris", "blanco", "beige", "marron"];
const aromasSpray = ["magnolias y vainilla", "watermelon", "peonias y rosas"];

// Función para mostrar un mensaje de bienvenida
function mostrarBienvenida() {
    alert("Bienvenido a nuestro emprendimiento La-Urdimbre");
}

// Función para mostrar opciones de un array
function mostrarOpciones(array, tipo) {
    let opciones = "";
    array.forEach((item, index) => {
        opciones += `${item}${index < array.length - 1 ? ', ' : ''}`;
    });
    alert(`Opciones disponibles para ${tipo}: ${opciones}`);
}

// Función para solicitar y validar el artículo
function solicitarArticulo() {
    let articulo;
    while (true) {
        articulo = prompt("¿Qué producto estás buscando? (almohadones, mantas, canastas, carteras, puff, botellones, dispensers, spray)").toLowerCase().trim();
        if (preciosBase[articulo] !== undefined) {
            break;
        }
        alert("Lo siento, el artículo que buscas no está disponible. Por favor, intenta de nuevo.");
    }
    return articulo;
}

// Función para seleccionar un aroma
function seleccionarAroma() {
    mostrarOpciones(aromasSpray, 'aroma');
    let aroma;
    while (true) {
        aroma = prompt(`Selecciona un aroma para el spray:`).toLowerCase().trim();
        if (aromasSpray.includes(aroma)) {
            break;
        }
        alert("Aroma no disponible. Por favor, elige un aroma de la lista.");
    }
    return aroma;
}

// Función para seleccionar un color
function seleccionarColor(articulo) {
    mostrarOpciones(coloresDisponibles, `color para ${articulo}`);
    let color;
    while (true) {
        color = prompt(`Selecciona un color para ${articulo}:`).toLowerCase().trim();
        if (coloresDisponibles.includes(color)) {
            break;
        }
        alert("Color no disponible. Por favor, elige un color de la lista.");
    }
    return color;
}

// Función para solicitar el tipo de pago y aplicar el descuento si es en efectivo
function solicitarTipoDePago(precio) {
    const pagoEfectivo = confirm("¿El pago se realizará en efectivo?");
    if (pagoEfectivo) {
        precio *= 0.9; // Aplicar un descuento del 10%
        alert("Se ha aplicado un descuento del 10% por pago en efectivo.");
    }
    return precio;
}

// Función principal para gestionar la consulta de artículos
function consultarArticulo() {
    mostrarBienvenida();
    const articulo = solicitarArticulo();
    let opcionSeleccionada = "";
    let precio = preciosBase[articulo];

    if (articulo === "spray") {
        opcionSeleccionada = seleccionarAroma();
    } else if (articulo !== "dispensers") {
        opcionSeleccionada = seleccionarColor(articulo);
    }

    precio = solicitarTipoDePago(precio);

    alert(`El precio final del ${articulo}${opcionSeleccionada ? ' con ' + opcionSeleccionada : ''} es $${precio}.`);
}

// Función para iniciar el simulador
function iniciarSimulador() {
    consultarArticulo();
}

// Llama a la función automáticamente cuando se carga el archivo
iniciarSimulador();
