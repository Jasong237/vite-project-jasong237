import "../css/style.css";
// import { DOMSelectors } from "../JS/dom.js";
// import { names, prices, categories } from "./products.js";
import javascriptLogo from "../javascript.svg";
import viteLogo from "/vite.svg";

/* function getValues() {
  return {
    names: DOMSelectors.names.value,
    prices: DOMSelectors.prices.value,
    categories: DOMSelectors.categories.value,
  };
} */

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>


  <div class="card">
<h2 class="card-name">   hello </h2>
<h2 class="card-price"> hello </h2> 
<h2 class="card-category">    hello  </h2>

</div>
`;

// cd app
// npm install
// npm run dev
