const products = [
  {
    id: 1,
    name: "Leche",
    price: 56,
    description: "Leche entera de 1 litro, ideal para consumo diario",
  },
  {
    id: 2,
    name: "Pan de molde",
    price: 75,
    description: "Pan blanco suave, ideal para sándwiches",
  },
  {
    id: 3,
    name: "Café instantáneo",
    price: 220,
    description: "Café soluble de sabor intenso",
  },
  {
    id: 4,
    name: "Arroz blanco",
    price: 110,
    description: "Arroz tipo largo fino, paquete de 1 kg",
  },
  {
    id: 5,
    name: "Aceite de girasol",
    price: 180,
    description: "Aceite vegetal de 1 litro, apto para cocinar o freír",
  },
  {
    id: 6,
    name: "Fideos spaghetti",
    price: 95,
    description: "Pasta tipo spaghetti de trigo duro",
  },
  {
    id: 7,
    name: "Azúcar refinada",
    price: 130,
    description: "Azúcar blanca común, paquete de 1 kg",
  },
  {
    id: 8,
    name: "Yerba mate",
    price: 250,
    description: "Yerba tradicional con palo, paquete de 1 kg",
  },
  {
    id: 9,
    name: "Manteca",
    price: 140,
    description: "Manteca natural de 200 gramos",
  },
  {
    id: 10,
    name: "Jabón de tocador",
    price: 60,
    description: "Jabón humectante con aroma floral",
  },
];

let carrito = [];

let productsShown = document.querySelector("#prods-sct");

products.forEach((prod) => {
  productsShown.innerHTML += `<div class="card m-3 flex-wrap" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${prod.name} - $${prod.price}</h5>
    <p class="card-text">${prod.description}</p>
    <button id="${prod.id}" 
          data-id="${prod.id}" 
          data-name="${prod.name}"
          data-price="${prod.price}"
          data-description="${prod.description}" 
          type="button" 
          class="btn btn-dark  btn-buy"> 
            Agregar al carrito
    </button>
    </div>
    </div>`;
});

let buttons = document.querySelectorAll(".btn-buy");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const product = {
      id: btn.dataset.id,
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      description: btn.dataset.description,
    };

    if (product) {
      carrito.push(product);

      console.log("Producto seleccionado:", product);
      console.log(carrito);
    }
  });
});
