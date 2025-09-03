// ==========================
// MOSTRAR PRODUCTOS EN productos.html
// ==========================
const contenedorProductos = document.getElementById("contenedorProductos");

if (contenedorProductos) {
    fetch("../data/productos.json")
        .then(res => res.json())
        .then(productos => {
            productos.forEach(prod => {
                // Crear tarjeta de producto
                const div = document.createElement("div");
                div.classList.add("card", "m-3", "p-2");
                div.style.width = "18rem";

                div.innerHTML = `
                    <img src="${prod.img}" class="card-img-top" alt="${prod.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text">$${prod.precio}</p>
                        <button class="btn btn-primary" data-id="${prod.id}">Agregar al carrito</button>
                    </div>
                `;

                contenedorProductos.appendChild(div);
            });

            // Agregar eventos a botones
            document.querySelectorAll(".btn-primary").forEach(boton => {
                boton.addEventListener("click", (e) => {
                    const id = e.target.getAttribute("data-id");
                    agregarAlCarrito(id, productos);
                });
            });
        });
}

// ==========================
// AGREGAR AL CARRITO
// ==========================
function agregarAlCarrito(id, productos) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = productos.find(p => p.id == id);

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    Swal.fire({
    title: 'Producto agregado',
    text: `${producto.nombre} se añadió al carrito 🛒`,
    icon: 'success',
    confirmButtonText: 'OK',
    confirmButtonColor: '#3085d6'
});
}

// ==========================
// MOSTRAR CARRITO EN carrito.html
// ==========================
const carritoLista = document.getElementById("carrito-lista");
const totalElemento = document.getElementById("total");

if (carritoLista && totalElemento) {
    renderizarCarrito();
}

// ==========================
// FUNCIONES DEL CARRITO
// ==========================
function renderizarCarrito() {
    carritoLista.innerHTML = ""; // limpia la lista
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.forEach(prod => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `
            ${prod.nombre} - $${prod.precio}
            <button class="btn btn-danger btn-sm eliminar" data-id="${prod.id}">X</button>
        `;
        carritoLista.appendChild(li);
    });

    actualizarTotal(carrito);

    // Agregar eventos a botones de eliminar
    document.querySelectorAll(".eliminar").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = e.target.getAttribute("data-id");
            eliminarDelCarrito(id);
        });
    });
}

function actualizarTotal(carrito) {
    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);
    totalElemento.textContent = `Total: $${total}`;
}

function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter(prod => prod.id != id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarrito(); // vuelve a dibujar sin recargar
}

