document.addEventListener('DOMContentLoaded', function () {
// Crear el fondo del formulario
const formFondo = document.createElement('div');
formFondo.id = 'formFondo';

// Crear el contenedor del formulario
const formContenedor = document.createElement('div');
formContenedor.id = 'formContenedor';

// Crear el formulario
const contactoForm = document.createElement('form');
contactoForm.id = 'contactoForm';

// Crear el título del formulario como imagen
const titleImage = document.createElement('img');
titleImage.src = '../multimedia/Screenshot 2024-09-02 113623.png'; // Cambia esta ruta a la ubicación de tu imagen
titleImage.alt = 'Nombre del Emprendimiento'; // Texto alternativo para la imagen
titleImage.style.width = '100%'; // Ajusta el ancho según lo necesites
titleImage.style.height = 'auto'; // Mantiene la proporción de la imagen
titleImage.style.marginBottom = '30px';
contactoForm.appendChild(titleImage);

// Título del formulario
const titleText = document.createElement('h2');
titleText.textContent = '¡Queremos que seas parte! ¡Suscribite ahora y recibí 5% off para tu primera compra!';
titleText.style.textAlign = 'center'; // Centrar el texto
contactoForm.appendChild(titleText);

// Campos del formulario (eliminando el campo de mensaje)
const fields = [
    { label: 'Nombre:', type: 'text', name: 'nombre', required: true },
    { label: 'Email:', type: 'email', name: 'email', required: true }
];

fields.forEach(({ label, type, name }) => {
    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.setAttribute('for', name); // Agrega atributo for para la accesibilidad

    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.required = true; // Marca el campo como requerido

    contactoForm.appendChild(labelElement);
    contactoForm.appendChild(input);
});

// Botón de enviar
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Suscribirme'; // Cambiar texto del botón
contactoForm.appendChild(submitButton);

// Botón de cerrar
const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.textContent = 'Cerrar';
closeButton.style.backgroundColor = '#737272'; // Color del botón de cerrar
contactoForm.appendChild(closeButton);

// Agregar el formulario al contenedor
formContenedor.appendChild(contactoForm);

// Agregar el contenedor al fondo
formFondo.appendChild(formContenedor);

// Agregar el fondo al body
document.body.appendChild(formFondo);

// Cargar los datos guardados del localStorage cuando se abre el formulario
const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
    contactoForm.nombre.value = savedData.nombre || '';
    contactoForm.email.value = savedData.email || '';
}

// Función para cerrar el formulario
closeButton.addEventListener('click', () => {
    localStorage.removeItem('formData');
    document.body.removeChild(formFondo);
});

// Validación y envío del formulario
contactoForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { nombre, email } = contactoForm;

    // Validaciones
    if (!nombre.value || !email.value) {
        Swal.fire({
            title: 'Error!',
            text: 'Todos los campos son obligatorios.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    if (!validateEmail(email.value)) {
        Swal.fire({
            title: 'Error!',
            text: 'Por favor ingresa un correo electrónico válido.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    // Deshabilitar el botón de enviar
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...'; // Cambiar texto del botón

    // Guardar los datos en localStorage
    localStorage.setItem('formData', JSON.stringify({ nombre: nombre.value, email: email.value }));

    try {
        await enviarFormulario({ nombre: nombre.value, email: email.value });

        // Mensaje de éxito
        Swal.fire({
            title: '¡Éxito!',
            text: 'Formulario enviado exitosamente!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        contactoForm.reset(); // Restablecer el formulario
        document.body.removeChild(formFondo);
    } catch (error) {
        console.error('Error al enviar el formulario:', error);

        // Mensaje de error
        Swal.fire({
            title: 'Error!',
            text: `Ocurrió un error al enviar el formulario: ${error.message}`,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    } finally {
        submitButton.disabled = false; // Habilitar nuevamente el botón
        submitButton.textContent = 'Suscribirme'; // Restaurar el texto del botón
    }
});

// Función para validar el correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Simulación de función de envío
async function enviarFormulario(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; // 80% de éxito
            if (isSuccess) {
                resolve();
            } else {
                reject(new Error('Error en el servidor.'));
            }
        }, 1000);
    });
}

// Crear el header
const header = document.createElement('header');
const topbarWrapper = document.createElement('div');
topbarWrapper.classList.add('topbar-wrapper');

// Crear el logo
const logoDiv = document.createElement('div');
logoDiv.classList.add('logo');
const logoImg = document.createElement('img');
logoImg.src = '../multimedia/image.ico';
logoImg.alt = 'logo e-commerce'; // Corrección de 'ecommers' a 'e-commerce'
logoDiv.appendChild(logoImg);

// Crear el título principal
const tituloPrincipalDiv = document.createElement('div');
tituloPrincipalDiv.classList.add('titulo__principal');
const tituloImg = document.createElement('img');
tituloImg.src = '../multimedia/Screenshot 2024-09-02 113623.png';
tituloImg.alt = 'título principal'; // Corrección de 'titulo' a 'título'
tituloPrincipalDiv.appendChild(tituloImg);

// Crear el menú
const menu = document.createElement('ul');
menu.classList.add('menu');
const menuItems = ['Inicio', 'Productos', 'Inspo', 'Packaging', 'Contacto'];

menuItems.forEach((item, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.classList.add('link');
    a.href = `#seccion${index + 1}`; // Asegúrate de que estas secciones existan
    a.textContent = item;
    li.appendChild(a);
    menu.appendChild(li);
});

// Crear el icono del carrito
const cartIconDiv = document.createElement('div');
cartIconDiv.classList.add('cart-icon');
const cartImg = document.createElement('img');
cartImg.src = '../multimedia/carrito compras.png';
cartImg.alt = 'carrito de compras'; // Corrección de 'carrito compras' a 'carrito de compras'
cartIconDiv.appendChild(cartImg);

// Añadir todos los elementos al topbarWrapper
topbarWrapper.appendChild(logoDiv);
topbarWrapper.appendChild(tituloPrincipalDiv);
topbarWrapper.appendChild(menu);
topbarWrapper.appendChild(cartIconDiv);
header.appendChild(topbarWrapper);

// Insertar el header al principio del body
document.body.insertBefore(header, document.body.firstChild);

// Crear la card del carrito
const cartCard = document.createElement('div');
cartCard.id = 'cart';
cartCard.classList.add('cart-card', 'hidden'); // Estilo de la card del carrito

// Crear el encabezado de la card
const cartHeader = document.createElement('h3');
cartHeader.textContent = 'Carrito';
cartCard.appendChild(cartHeader);

// Crear la lista de items del carrito
const cartItemsList = document.createElement('ul');
cartItemsList.id = 'cart-items';
cartCard.appendChild(cartItemsList);

// Crear el elemento del total del carrito
const cartTotalElement = document.createElement('p');
cartTotalElement.id = 'cart-total';
cartCard.appendChild(cartTotalElement);

// Añadir la card del carrito al body
document.body.appendChild(cartCard);

// Evento para mostrar/ocultar el carrito al hacer clic en el icono
cartIconDiv.addEventListener('click', () => {
    cartCard.classList.toggle('hidden'); // Muestra u oculta el carrito
});

// Creación del contenido principal (main)
const main = document.createElement('main');
// Sección 1 (Inicio)
const seccion1 = document.createElement('section');
seccion1.id = 'seccion1';

// Crear el contenedor principal
const contenedor = document.createElement('div');
contenedor.classList.add('contenedor');

// Crear el párrafo principal
const parrafoPrincipal = document.createElement('div');
parrafoPrincipal.classList.add('parrafo__principal');

// Crear los párrafos
const parrafo1 = document.createElement('p');
parrafo1.innerHTML = '<strong>Urdimbre</strong> es un conjunto de hilos que cruzados forman una trama, en este caso el tejido.';

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Esos hilos recorren un largo camino de prueba y error, tejer, destejer, cambiar aguja y luego volver a comenzar.';

const parrafo3 = document.createElement('p');
parrafo3.textContent = 'Poéticamente amamos la idea de tener un nombre que de alguna manera represente aquello que nos ocurre a lo largo de este camino que llamamos vida.';

// Añadir los párrafos al contenedor principal
parrafoPrincipal.appendChild(parrafo1);
parrafoPrincipal.appendChild(parrafo2);
parrafoPrincipal.appendChild(parrafo3);
contenedor.appendChild(parrafoPrincipal);

// Crear la galería de imágenes
const imageGrid = document.createElement('div');
imageGrid.classList.add('image-grid');

// Lista de fuentes de imágenes
const imageSources = [
    '../multimedia/grid1.png',
    '../multimedia/grid2.png',
    '../multimedia/grid3.png',
    '../multimedia/grid4.png',
    '../multimedia/grid5.png',
    '../multimedia/grid6.png',
    '../multimedia/grid7.png',
    '../multimedia/grid8.png',
    '../multimedia/grid9.png'
];

// Añadir imágenes a la galería
imageSources.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Imagen ${index + 1}`; // Usar el índice de la iteración para el alt
    imageGrid.appendChild(img);
});

// Añadir la galería de imágenes al contenedor
contenedor.appendChild(imageGrid);

// Añadir el contenedor a la sección
seccion1.appendChild(contenedor);

// Añadir la sección al elemento principal
main.appendChild(seccion1);

// Función para inicializar la carga de productos
let productos = []; // Asegurar que la lista de productos esté disponible globalmente

async function init() {
    try {
        // Cargar productos desde JSON
        productos = await cargarProductos(); // Guardamos los productos en la variable global

        // Crear la sección de productos
        const seccion2 = document.createElement('section');
        seccion2.id = 'seccion2';

        const contenedorProductos = document.createElement('div');
        contenedorProductos.id = 'contenedor-productos';
        contenedorProductos.classList.add('bg-white');

        const productosWrapper = document.createElement('div');
        productosWrapper.classList.add('mx-auto', 'max-w-2xl', 'px-4', 'py-16', 'sm:px-6', 'sm:py-24', 'lg:max-w-7xl', 'lg:px-8');

        const tituloProductos = document.createElement('h2');
        tituloProductos.classList.add('titulo__productos');
        tituloProductos.textContent = 'Productos';

        const grid = document.createElement('div');
        grid.classList.add('grid');

        // Crear tarjetas de productos
        productos.forEach(producto => {
            const cardProducto = document.createElement('div');
            cardProducto.classList.add('bg-white', 'rounded-lg', 'shadow', 'overflow-hidden');

            const imgProducto = document.createElement('img');
            imgProducto.src = producto.img;
            imgProducto.alt = producto.nombre;

            const nombreProducto = document.createElement('h3');
            nombreProducto.classList.add('producto-titulo');
            nombreProducto.textContent = producto.nombre;

            const precioProducto = document.createElement('p');
            precioProducto.classList.add('precio-producto');
            precioProducto.textContent = `$${producto.precio}`;

            const button = document.createElement('button');
            button.textContent = 'Agregar al carrito';
            button.classList.add('agregar-carrito');
            button.dataset.nombre = producto.nombre;

            // Añadir elementos a la tarjeta del producto
            cardProducto.appendChild(imgProducto);
            cardProducto.appendChild(nombreProducto);
            cardProducto.appendChild(precioProducto);
            cardProducto.appendChild(button);

            // Añadir la tarjeta del producto a la cuadrícula
            grid.appendChild(cardProducto);
        });

        // Agregar elementos a la sección de productos
        productosWrapper.appendChild(tituloProductos);
        productosWrapper.appendChild(grid);
        contenedorProductos.appendChild(productosWrapper);
        seccion2.appendChild(contenedorProductos);
        main.appendChild(seccion2);

        // Agregar eventos a los botones de agregar al carrito
        document.querySelectorAll('.agregar-carrito').forEach(button => {
            button.addEventListener('click', () => {
                const nombre = button.dataset.nombre;
                agregarAlCarrito(nombre);
            });
        });
    } catch (error) {
        console.error('Error al inicializar la aplicación:', error);
    }
}

// Función para cargar productos desde un JSON
async function cargarProductos() {
    const response = await fetch('./json/productos.json');
    if (!response.ok) {
        throw new Error('Error al cargar los productos: ' + response.statusText);
    }
    const data = await response.json();
    return data;
}

// Función para agregar productos al carrito
const carrito = [];

function agregarAlCarrito(nombre) {
    const producto = carrito.find(item => item.nombre === nombre);
    if (producto) {
        producto.cantidad++;
    } else {
        const productoEncontrado = productos.find(({ nombre: prodNombre }) => prodNombre === nombre);
        if (productoEncontrado) {
            const { precio } = productoEncontrado;
            carrito.push({ nombre, cantidad: 1, precio });
        } else {
            console.error('Producto no encontrado:', nombre);
        }
    }

    // Mostrar la tarjeta del carrito si está oculta
    const cartCard = document.getElementById('cart');
    cartCard.classList.remove('hidden'); // Mostrar la tarjeta del carrito
    
    mostrarCarrito(); // Actualizar la visualización del carrito
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(nombre) {
    const productoIndex = carrito.findIndex(item => item.nombre === nombre);
    if (productoIndex !== -1) {
        carrito.splice(productoIndex, 1); // Eliminar el producto del carrito
        mostrarCarrito(); // Actualizar el carrito después de la eliminación
    } else {
        console.error('Producto no encontrado en el carrito:', nombre);
    }
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Limpiar la lista

    // Usar if ternario para mostrar mensaje si el carrito está vacío
    if (carrito.length === 0) {
        cartItemsList.innerHTML = '<li>El carrito está vacío.</li>';
    } else {
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio} x ${producto.cantidad}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            // Asegúrate de que esta línea esté bien definida
            removeButton.addEventListener('click', () => eliminarDelCarrito(producto.nombre)); // Aquí se llama a eliminar

            li.appendChild(removeButton);
            cartItemsList.appendChild(li); // Agregar el li al contenedor
        });
    }

    // Calcular total y actualizar el elemento de total
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const cartTotalElement = document.getElementById('cart-total'); // Asegúrate de que este elemento exista en tu HTML
    cartTotalElement.textContent = total > 0 ? `Total: $${total}` : ''; // Mostrar total solo si hay productos
}

// Inicializar la aplicación
init().catch(console.error);
document.body.appendChild(main);


// Función para crear la línea rosa
function crearLineaRosa() {
    const lineaRosa = document.createElement("div");
    lineaRosa.classList.add("linea-rosa");
    document.body.appendChild(lineaRosa);
}

// Llamar a la función para crear la línea
crearLineaRosa();
// Función para cargar la sección de inspiración
function cargarSeccionInspiracion() {
    const seccion3 = document.createElement("section");
    seccion3.id = "seccion3";

    const titulo = document.createElement("h2");
    titulo.classList.add("titulo__inspo");
    titulo.textContent = "Inspo para ustedes";
    seccion3.appendChild(titulo);

    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");

    const imagenes = [
        { src: "../multimedia/ideas.jpg", alt: "Imagen 1" },
        { src: "../multimedia/ideas2.jpg", alt: "Imagen 2" },
        { src: "../multimedia/ideas7.jpg", alt: "Imagen 3" },
        { src: "../multimedia/ideas4.jpg", alt: "Imagen 4" },
        { src: "../multimedia/ideas5.jpg", alt: "Imagen 5" }
    ];

    imagenes.forEach(({ src, alt }) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = alt;
        flexContainer.appendChild(img);
    });

    seccion3.appendChild(flexContainer);
    document.body.appendChild(seccion3);
}

// Llamar a la función de carga de la sección de inspiración al final
cargarSeccionInspiracion();
crearLineaRosa();

// Sección 4 (Packaging)
const seccion4 = document.createElement('section');
seccion4.id = 'seccion4';

const contenedorPackaging = document.createElement('div');
contenedorPackaging.classList.add('contenedor__packaging');

const tituloPackaging = document.createElement('h3');
tituloPackaging.classList.add('titulo__packaging');
tituloPackaging.textContent = 'Packaging';

const parrafoPackaging = document.createElement('p');
parrafoPackaging.classList.add('parrafo__packaging');
parrafoPackaging.innerHTML = `Proponemos un envoltorio que sea reutilizable, con materiales ecológicos que acompañan la linea y la estética de la marca.
    Diseñamos un sello con tinta para tela con el fin de implantar nuestro logo en los distintos embalajes posibles pero que a su vez mantengan la identidad que nos caracteriza: la rusticidad,
    la simpleza, la austeridad y principalmente los productos artesanales hechos totalmente a mano.`;

const packagingImagenes = document.createElement('div');
packagingImagenes.classList.add('packaging__imagenes');

const packagingImgs = [
    { src: '../multimedia/caja.png', alt: 'caja packaging' },
    { src: '../multimedia/bolsa (1).png', alt: 'bolsa packaging' }
];

packagingImgs.forEach(({ src, alt }) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.classList.add('packaging__imagen');
    packagingImagenes.appendChild(img);
});

contenedorPackaging.appendChild(tituloPackaging);
contenedorPackaging.appendChild(parrafoPackaging);
contenedorPackaging.appendChild(packagingImagenes);
seccion4.appendChild(contenedorPackaging);
document.body.appendChild(seccion4);

// Crear el footer
const footer = document.createElement('footer');
footer.classList.add('footer');

// Crear la sección de contacto
const seccionContacto = document.createElement('section');
seccionContacto.id = 'seccion5'; // Para anclarlo si es necesario
seccionContacto.classList.add('contacto__seccion');

// Crear el contenedor de la información de contacto
const contenedorInfo = document.createElement('div');
contenedorInfo.classList.add('info__contacto');

// Crear los elementos de contacto
const redesSociales = document.createElement('p');
redesSociales.innerHTML = '<a href="https://www.instagram.com/la.urdimbrecitybell">@la.urdimbre.citybell</a>';

const telefono = document.createElement('p');
telefono.textContent = '221 4557180';

const ubicacion = document.createElement('p');
ubicacion.textContent = 'City Bell';

// Añadir los elementos al contenedor de información
contenedorInfo.appendChild(ubicacion);
contenedorInfo.appendChild(document.createTextNode(' - TEJIDOS A MANO - ')); // Texto decorativo
contenedorInfo.appendChild(redesSociales);
contenedorInfo.appendChild(telefono);

// Crear el contenedor de colores
const contenedorColores = document.createElement('div');
contenedorColores.classList.add('contenedor__colores');

const coloresImagen = document.createElement('div');
coloresImagen.classList.add('colores__imagen');

// Crear la imagen
const colorImagen = document.createElement('img');
colorImagen.src = '../multimedia/colores.png';
colorImagen.alt = 'colores imagen';

// Añadir la imagen al contenedor de imágenes
coloresImagen.appendChild(colorImagen);

// Añadir el contenedor de la imagen al contenedor principal de colores
contenedorColores.appendChild(coloresImagen);

// Añadir el contenedor de colores al footer
footer.appendChild(contenedorColores);

// Añadir el contenedor de información a la sección de contacto
seccionContacto.appendChild(contenedorInfo);

// Añadir la sección de contacto al footer
footer.appendChild(seccionContacto);

// Añadir el footer al body
document.body.appendChild(footer);

// Función para obtener productos
async function obtenerProductos() {
    try {
        const respuesta = await fetch('./json/productos.json');
        if (!respuesta.ok) {
            throw new Error('Error al obtener los productos');
        }
        const productos = await respuesta.json();
        console.log(productos); // O cualquier otra acción que desees hacer con los productos
        return productos;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamar a la función al cargar el script
obtenerProductos();

// Crear la línea rosa
crearLineaRosa();

// Función para crear la línea rosa
function crearLineaRosa() {
    const lineaRosa = document.createElement("div");
    lineaRosa.classList.add("linea-rosa");
    document.body.appendChild(lineaRosa);
}
});