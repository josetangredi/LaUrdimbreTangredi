document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    
    // Creación del header
    const header = document.createElement('header');
    const topbarWrapper = document.createElement('div');
    topbarWrapper.classList.add('topbar-wrapper');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = '../multimedia/image.ico';
    logoImg.alt = 'logo ecommers';
    logoDiv.appendChild(logoImg);

    const tituloPrincipalDiv = document.createElement('div');
    tituloPrincipalDiv.classList.add('titulo__principal');
    const tituloImg = document.createElement('img');
    tituloImg.src = '../multimedia/Screenshot 2024-09-02 113623.png';
    tituloImg.alt = 'titulo principal';
    tituloPrincipalDiv.appendChild(tituloImg);

    const menu = document.createElement('ul');
    menu.classList.add('menu');
    const menuItems = ['Inicio', 'Productos', 'Inspo', 'Packaging', 'Contacto'];
    menuItems.forEach((item, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.classList.add('link');
        a.href = `#seccion${index + 1}`;
        a.textContent = item;
        li.appendChild(a);
        menu.appendChild(li);
    });

    const cartIconDiv = document.createElement('div');
    cartIconDiv.classList.add('cart-icon');
    const cartImg = document.createElement('img');
    cartImg.src = '../multimedia/carrito compras.png';
    cartImg.alt = 'carrito compras';
    cartIconDiv.appendChild(cartImg);

    topbarWrapper.appendChild(logoDiv);
    topbarWrapper.appendChild(tituloPrincipalDiv);
    topbarWrapper.appendChild(menu);
    topbarWrapper.appendChild(cartIconDiv);
    header.appendChild(topbarWrapper);

    document.body.insertBefore(header, document.body.firstChild);

    // Card del carrito
    const cartCard = document.createElement('div');
    cartCard.id = 'cart';
    cartCard.classList.add('cart-card', 'hidden'); // Estilo de la card del carrito

    const cartHeader = document.createElement('h3');
    cartHeader.textContent = 'Carrito';
    cartCard.appendChild(cartHeader);

    const cartItemsList = document.createElement('ul');
    cartItemsList.id = 'cart-items';
    cartCard.appendChild(cartItemsList);

    const cartTotalElement = document.createElement('p');
    cartTotalElement.id = 'cart-total';
    cartCard.appendChild(cartTotalElement);

    body.appendChild(cartCard);

    // Creación del contenido principal (main)
    const main = document.createElement('main');

        // Sección 1 (Inicio)
        const seccion1 = document.createElement('section');
        seccion1.id = 'seccion1';
    
        const contenedor = document.createElement('div');
        contenedor.classList.add('contenedor');
    
        const parrafoPrincipal = document.createElement('div');
        parrafoPrincipal.classList.add('parrafo__principal');
    
        const parrafo1 = document.createElement('p');
        parrafo1.innerHTML = '<strong>Urdimbre</strong> es un conjunto de hilos que cruzados forman una trama, en este caso el tejido.';
        const parrafo2 = document.createElement('p');
        parrafo2.textContent = 'Esos hilos recorren un largo camino de prueba y error, tejer, destejer, cambiar aguja y luego volver a comenzar.';
        const parrafo3 = document.createElement('p');
        parrafo3.textContent = 'Poéticamente amamos la idea de tener un nombre que de alguna manera represente aquello que nos ocurre a lo largo de este camino que llamamos vida.';
    
        parrafoPrincipal.appendChild(parrafo1);
        parrafoPrincipal.appendChild(parrafo2);
        parrafoPrincipal.appendChild(parrafo3);
        contenedor.appendChild(parrafoPrincipal);
    
        // Crear galería de imágenes
        const imageGrid = document.createElement('div');
        imageGrid.classList.add('image-grid');
    
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
    
        imageSources.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Imagen ${imageSources.indexOf(src) + 1}`;
            imageGrid.appendChild(img);
        });
    
        contenedor.appendChild(imageGrid);
        seccion1.appendChild(contenedor);
        main.appendChild(seccion1);

    // Sección 2 (Productos)
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
    productosWrapper.appendChild(tituloProductos);

    // Crear productos dinámicamente
    const productos = [
        { img: '../multimedia/cojines3.jpg', nombre: 'Almohadones', precio: '$26000' },
        { img: '../multimedia/mantas1.jpg', nombre: 'Mantas', precio: '$32000' },
        { img: '../multimedia/dispenser1.jpg', nombre: 'Dispensers', precio: '$13000' },
        { img: '../multimedia/dispenser1.jpg', nombre: 'Canastas', precio: '$11000' },
        { img: '../multimedia/spray1.jpg', nombre: 'Sprays', precio: '$15000' },
        { img: '../multimedia/individuales2.jpg', nombre: 'Indiviuales', precio: '$12000' },
        { img: '../multimedia/botellones.jpg', nombre: 'Botellones', precio: '$12000' },
        { img: '../multimedia/cojines2.jpg', nombre: 'Puff', precio: '$43000' }
    ];

    const productosGrid = document.createElement('div');
    productosGrid.classList.add('grid', 'grid-cols-1', 'gap-x-6', 'gap-y-10', 'sm:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'xl:gap-x-8');

    productos.forEach(producto => {
        const a = document.createElement('a');
        a.href = '#';
        a.classList.add('group');

        const divImg = document.createElement('div');
        divImg.classList.add('aspect-h-1', 'aspect-w-1', 'w-full', 'overflow-hidden', 'rounded-lg', 'bg-gray-200', 'xl:aspect-h-8', 'xl:aspect-w-7');
        const img = document.createElement('img');
        img.src = producto.img;
        img.alt = producto.nombre;
        img.classList.add('h-full', 'w-full', 'object-cover', 'object-center', 'group-hover:opacity-75');
        divImg.appendChild(img);

        const nombre = document.createElement('h3');
        nombre.classList.add('mt-4', 'text-sm', 'text-gray-700');
        nombre.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.classList.add('mt-1', 'text-lg', 'font-medium', 'text-gray-900');
        precio.textContent = producto.precio;

        // Crear botón "Comprar"
        const botonComprar = document.createElement('button');
        botonComprar.type = 'button'; // Asegúrate de que el botón no envíe el formulario
        botonComprar.textContent = 'Comprar';
        botonComprar.classList.add('boton-comprar');

        // Evento click para añadir el producto al carrito
        botonComprar.addEventListener('click', (e) => {
            e.preventDefault();
            agregarAlCarrito(producto);
            cartCard.classList.remove('hidden'); // Mostrar la card instantáneamente al hacer clic en Comprar
        });

        a.appendChild(divImg);
        a.appendChild(nombre);
        a.appendChild(precio);
        a.appendChild(botonComprar); // Añadir el botón

        productosGrid.appendChild(a);
    });

    productosWrapper.appendChild(productosGrid);
    contenedorProductos.appendChild(productosWrapper);
    seccion2.appendChild(contenedorProductos);
    main.appendChild(seccion2);

    body.appendChild(main);

    // Variables de carrito
    const cartIcon = document.querySelector('.cart-icon');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Recuperar carrito desde localStorage
    let cartData = JSON.parse(localStorage.getItem('carrito')) || [];

    // Función para añadir productos al carrito
    function agregarAlCarrito(producto) {
        const indexProducto = cartData.findIndex(item => item.nombre === producto.nombre);
        if (indexProducto !== -1) {
            cartData[indexProducto].cantidad += 1;
        } else {
            cartData.push({ ...producto, cantidad: 1 });
        }

        localStorage.setItem('carrito', JSON.stringify(cartData));

        mostrarCarrito();

        const currentScroll = window.scrollY;
        window.scrollTo(0, currentScroll);
    }

    // Función para eliminar un producto del carrito
    function eliminarDelCarrito(index) {
        cartData.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(cartData));
        mostrarCarrito();
    }

    // Función para mostrar el carrito
    function mostrarCarrito() {
        cartItems.innerHTML = '';

        if (cartData.length === 0) {
            cartItems.textContent = 'El carrito está vacío';
            cartTotal.textContent = '';
        } else {
            let total = 0;
            cartData.forEach((item, index) => {
                const li = document.createElement('li');
                li.textContent = `${item.nombre} - ${item.cantidad} x ${item.precio}`;

                // Botón de eliminar
                const botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.classList.add('boton-eliminar'); // Añade clase para estilizar
                botonEliminar.addEventListener('click', () => eliminarDelCarrito(index));

                li.appendChild(botonEliminar);
                cartItems.appendChild(li);

                const precio = parseInt(item.precio.replace('$', '').replace(',', ''));
                total += precio * item.cantidad;
            });
            cartTotal.textContent = `Total: $${total.toLocaleString()}`;
        }
    }

    // Mostrar el carrito al hacer clic en el icono del carrito
    cartIcon.addEventListener('click', function () {
        cartCard.classList.toggle('hidden');
        mostrarCarrito();
    });

    // Mantener el carrito visible si la página se recarga
    mostrarCarrito();



    // Función para crear la línea rosa
    function crearLineaRosa() {
        const lineaRosa = document.createElement("div");
        lineaRosa.classList.add("linea-rosa");
        document.body.appendChild(lineaRosa);
    }

    // Llamar a la función para crear la línea
    crearLineaRosa();

    // Sección 3 (Inspiración) al final
    cargarSeccionInspiracion(); // Llamar a la función de inspiración al final

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

        imagenes.forEach(imagen => {
            const img = document.createElement("img");
            img.src = imagen.src;
            img.alt = imagen.alt;
            flexContainer.appendChild(img);
        });

        seccion3.appendChild(flexContainer);
        document.body.appendChild(seccion3);
    }

    // Llamar a la función para crear la línea
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

    packagingImgs.forEach(imgData => {
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.classList.add('packaging__imagen');
        packagingImagenes.appendChild(img);
    });

    // Añade packagingImagenes al contenedor principal de tu página
    document.body.appendChild(packagingImagenes); // Cambia esto por el contenedor adecuado en tu caso

    contenedorPackaging.appendChild(tituloPackaging);
    contenedorPackaging.appendChild(parrafoPackaging);
    contenedorPackaging.appendChild(packagingImagenes);
    seccion4.appendChild(contenedorPackaging);
    document.body.appendChild(seccion4);

    // Estilos CSS para el fondo rosa
    const style = document.createElement('style');
    style.textContent = `
        .bg-rosa {
            background-color: #FFC0CB; /* Color rosa claro */
        }
    `;

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
    
        // Crear el elemento de redes sociales
        const redesSociales = document.createElement('p');
        redesSociales.innerHTML = '<a href="https://www.instagram.com/la.urdimbrecitybell">@la.urdimbre.citybell</a>';
    
        // Crear el elemento de número de teléfono
        const telefono = document.createElement('p');
        telefono.innerHTML = '221 4557180';
    
        // Crear el elemento de ubicación
        const ubicacion = document.createElement('p');
        ubicacion.innerHTML = 'City Bell';
    
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
    });
    

