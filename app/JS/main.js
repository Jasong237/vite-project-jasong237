import "../css/style.css";
import { DOMSelectors } from "./dom.js";
import { names, prices, categories } from "./products.js";

const options = ["Hats", "Faces", "Rares"];

document.querySelector("#app").innerHTML = `

<div class="card">
<h2 class="card-name">   ${DOMSelectors.names} </h2>
<h2 class="card-price" ${DOMSelectors.prices} </h2> />
<h2 class="card-category">    ${DOMSelectors.categories}  </h2>
<button id="counter" type="button"></button>
</div>
`;

setupCounter(document.querySelector("#counter"));

/* <div>
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
  Hello
</p>
</div> */

// npm create@latest
// http://localhost:5173/
