import "../css/style.css";
import { DOMSelectors } from "../JS/dom.js";
import { products } from "../JS/products.js";

products.forEach((product) => {
  create();
});

function create() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="card"> 
      <h2 class="card-name">   ${product.name} </h2>
    </div>`
  );
}

// cd app
// npm install
// npm run dev
