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

DOMSelectors.button.addEventListener("click", click);

const kitchen = products.filter((product) => product.category === "Kitchen");
function click(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  addProducts(kitchen);
}

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
