import {determinarBisiesto} from "./esBisiesto.js";

const Anio = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anio = Number.parseInt(Anio.value);
  let mensaje = determinarBisiesto(anio) === true ? "El año " + anio + " es bisiesto":
                "El año " + anio + " no es bisiesto"
  div.innerHTML = "<p>" + mensaje + "</p>";
});
