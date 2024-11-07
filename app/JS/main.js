import "../css/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { products } from "../JS/products.js";

function displayProducts() {
  products.forEach((product) => {
    addCard(product);
  });
}

displayProducts();

function addCard(product) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
      <h2 class="product-name"> ${product.name} </h2>
      <h2 class="product-price"> Price: $${product.price} </h2>
    </div>`
  );
}

// cd app
// npm install
// npm run dev
