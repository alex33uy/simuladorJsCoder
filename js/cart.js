const stringLocal = localStorage.getItem("carrito");
console.log(stringLocal);
const cartLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(cartLocalStorage);

const prodsDeCarrito = document.getElementById("prodsDeCarrito");

cartLocalStorage.forEach((prod) => {
  prodsDeCarrito.innerHTML += `
    <div class="container d-flex justify-content-center mt-5">
  <div class="card shadow p-3" style="width: 26rem;">
    <div class="d-flex">
      <div>
        <h5>${prod.name}</h5>
        <p class="mb-2">Cantidad</p>
        <span class="fw-bold">$${prod.price} </span>
      </div>
    </div>

    <hr>

    <div class="d-flex justify-content-between">
      <button id="delete${prod.id}class="btn btn-danger">Eliminar</button>
      <button class="btn btn-success">Comprar articulo</button>
    </div>
  </div>
</div>
    `;
});
