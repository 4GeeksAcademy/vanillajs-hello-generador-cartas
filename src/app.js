/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palos = ["♥", "♦", "♣", "♠"];
  const valores = [2, 3, 4, 5, 6, 7, 8, "J", "K", "Q", "A"];

  document.getElementsByClassName("card")[0].style.height = "";
  document.getElementsByClassName("card")[0].style.width = "";

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generarCarta() {
    document.getElementsByClassName("card")[0].style.height = "";
    document.getElementsByClassName("card")[0].style.width = "";

    let valorCarta = valores[getRandomInt(valores.length)];

    document.getElementById("valor").innerHTML = valorCarta;

    let palo = palos[getRandomInt(palos.length)];

    document.querySelectorAll(".palo").forEach(elemento => {
      elemento.classList.remove("heart", "diamond", "club", "spade");

      if (palo == "♥") {
        elemento.classList.add("heart");
      } else if (palo == "♦") {
        elemento.classList.add("diamond");
      } else if (palo == "♣") {
        elemento.classList.add("club");
      } else if (palo == "♠") {
        elemento.classList.add("spade");
      }
      elemento.innerHTML = `<p>${palo}</p>`;
    });
  }
  generarCarta();

  let allBody = document.querySelector("body");
  let divBotones = document.createElement("div");
  let divInputs = document.createElement("div");
  let botonChange = document.createElement("button");
  let botonTemporizado = document.createElement("button");
  let botonCancelarTemporizado = document.createElement("button");
  let inputAlto = document.createElement(`input`);
  let inputAncho = document.createElement(`input`);

  divBotones.classList.add("d-flex", "justify-content-center");
  divInputs.classList.add("d-flex", "justify-content-center");
  botonChange.innerHTML = "Recargar";
  botonChange.classList.add("btn", "btn-primary");
  botonChange.style.marginRight = "5px";
  botonTemporizado.innerHTML = "Temporizador";
  botonTemporizado.classList.add("btn", "btn-secondary");
  botonCancelarTemporizado.style.marginLeft = "5px";
  botonCancelarTemporizado.innerHTML = "Cancelar Temporizador";
  botonCancelarTemporizado.classList.add("btn", "btn-warning");

  inputAlto.setAttribute("type", "number");
  inputAlto.setAttribute("placeholder", "Altura");
  inputAncho.setAttribute("type", "number");
  inputAncho.setAttribute("placeholder", "Ancho");

  allBody.appendChild(divBotones);
  allBody.appendChild(divInputs);

  divInputs.appendChild(inputAlto);
  divInputs.appendChild(inputAncho);
  divBotones.appendChild(botonChange);
  divBotones.appendChild(botonTemporizado);
  divBotones.appendChild(botonCancelarTemporizado);

  botonChange.addEventListener("click", generarCarta);

  botonTemporizado.addEventListener("click", () => {
    var intervalo = setInterval(generarCarta, 10000);
  });

  botonCancelarTemporizado.addEventListener("click", () => {
    clearInterval(intervalo);
  });

  inputAlto.addEventListener("change", function() {
    document.getElementsByClassName(
      "card"
    )[0].style.height = `${inputAlto.value}px`;
  });

  inputAncho.addEventListener("change", function() {
    document.getElementsByClassName(
      "card"
    )[0].style.width = `${inputAncho.value}px`;
  });
};
