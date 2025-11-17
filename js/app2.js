

fetch("../products.json")
  .then(response => response.json())
  .then(products => {
    console.log("Productos cargados:", products);
      
    let carrito = [];

let productsShown = document.querySelector("#prods-sct");


products.forEach((prod) => {
  productsShown.innerHTML += `<div class="card m-3 flex-wrap card shadow p-3" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${prod.name} - $${prod.price}</h5>
    <p class="card-text">${prod.description}</p>
    <button id="${prod.id}" 
          data-id="${prod.id}" 
          data-name="${prod.name}"
          data-price="${prod.price}"
          data-description="${prod.description}"
          data-quantity= "${prod.quantity}"
          type="button" 
          class="btn btn-dark  btn-buy"> 
            Agregar al carrito
    </button>
    </div>
    </div>`;

    

let buttons = document.querySelectorAll(".btn-buy");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      description: btn.dataset.description,
      quantity: btn.dataset.quantity
    };


      carrito.push(product);

      localStorage.setItem("carrito", JSON.stringify(carrito));
  });
});


  });
});




