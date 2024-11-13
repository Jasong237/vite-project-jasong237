import "../css/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { products } from "../JS/products.js";

function addProducts() {
  products.forEach((product) => {
    addCard(product);
  });
}

function addCard(product) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
      <h2 class="product-name" id="${product.name}"> ${product.name} </h2>
      <img class="product-img" src="${product.image}" alt="${product.name}"
      <h2 class="product-price"> Price: $${product.price} </h2>
    </div>`
  );
}

addProducts();

function click(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";

  products.forEach((product) => {
    if (product.category === "Kitchen") {
      addCard(product);
    }
  });
}

DOMSelectors.button.addEventListener("click", click);

/* function kitchenOnly() {
  const kitchen = products.forEach((product) => {
    if (products.category === "Kitchen") {
      addCard(kitc);
    }
  });
}
 */

// cd app
// npm install
// npm run dev

//last day tuesday!
