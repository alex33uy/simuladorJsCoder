//Unifico productos iguales
function unificarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const carritoUnificado = [];

  carrito.forEach((producto) => {
    const exist = carritoUnificado.find(p => p.id === producto.id);

    if (exist) {
      exist.quantity = Number(exist.quantity) + Number(producto.quantity);
    } else {
      carritoUnificado.push({ ...producto });
    }
  });

  localStorage.setItem("carrito", JSON.stringify(carritoUnificado));

  return carritoUnificado;
}

unificarCarrito();
console.log(unificarCarrito());




//ubico la seccion y creo la seccion del carrito con los productos del storage
const cartLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(cartLocalStorage);
const prodsDeCarrito = document.getElementById("prodsDeCarrito");

cartLocalStorage.forEach((prod) => {
  let total = Number(prod.price) * Number(prod.quantity)
  prodsDeCarrito.innerHTML += `
    <div class="container d-flex justify-content-center mt-5 mb-3">
  <div class="card shadow p-3" style="width: 26rem;">
    <div class="d-flex">
      <div>
        <h5>${prod.name}</h5>
        <p class="mb-2">Cantidad ${prod.quantity} </p>
        <span class="fw-bold">$${total} </span>
      </div>
    </div>

    <hr>

    <div class="d-flex justify-content-between">
      <button id="delete${prod.id}" class="btn btn-danger" onclick="eliminarDelCarrito(${prod.id})">Eliminar</button>
    </div>
  </div>
</div>
    `;
});

// elimina del carrito el producto con el boton
function eliminarDelCarrito(id) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  console.log(carrito);

  let updatedCarrito = carrito.filter(product => product.id != id);

  localStorage.setItem("carrito", JSON.stringify(updatedCarrito));

  location.reload();
  
}

//Obtengo compras y lo incluyo al campo del total recargando pagina y limpiando local storage
const total = cartLocalStorage.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

document.getElementById("totalCompra").textContent = `$${total}`;

document.getElementById("confirmarBtn").addEventListener("click", () => {
  alert("Compra confirmada!");

  localStorage.removeItem("carrito");

  location.reload();
  });

