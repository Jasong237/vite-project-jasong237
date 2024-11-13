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

function themeone(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  products.forEach((product) => {
    addThemeOne(product);
  });
}

function addThemeOne(product) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="cardthemeone"> 
        <h2 class="product-name" id="${product.name}"> ${product.name} </h2>
        <img class="product-img" src="${product.image}" alt="${product.name}"
        <h2 class="product-price"> Price: $${product.price} </h2>
      </div>`
  );
}

function themetwo(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";
  products.forEach((product) => {
    addThemeTwo(product);
  });
}

function addThemeTwo(product) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" id="cardthemetwo"> 
        <h2 class="product-name" id="${product.name}"> ${product.name} </h2>
        <img class="product-img" src="${product.image}" alt="${product.name}"
        <h2 class="product-price"> Price: $${product.price} </h2>
      </div>`
  );
}

function electronics(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";

  products.forEach((product) => {
    if (product.category === "Electronics") {
      addCard(product);
    }
  });
}

function clothing(event) {
  event.preventDefault();
  document.querySelector(".container").innerHTML = "";

  products.forEach((product) => {
    if (product.category === "Clothing") {
      addCard(product);
    }
  });
}

DOMSelectors.button1.addEventListener("click", themeone);
DOMSelectors.button2.addEventListener("click", themetwo);
DOMSelectors.button3.addEventListener("click", electronics);
DOMSelectors.button4.addEventListener("click", clothing);

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
