// Cronometro
const relogio = document.querySelector(".relogio");
let segundosText = document.querySelector(".segundos");
let minutosText = document.querySelector(".minutos");
let horasText = document.querySelector(".horas");
// Botoes
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let segundosTimer = 00;
let minutosTimer = 00;
let horasTimer = 00;
let tempo;

function zeroAdd(tempo) {
  return tempo >= 10 ? tempo : `0${tempo}`;
}

function setHours() {
  horasTimer++;
  horasText.innerHTML = zeroAdd(horasTimer);
  if (horasTimer === 24) {
    horasText = 00;
    setSeconds();
  }
}
function setMinutes() {
  minutosTimer++;
  minutosText.innerHTML = zeroAdd(minutosTimer);
  if (minutosTimer === 60) {
    minutosTimer = 00;
    setHours();
  }
}
function setSeconds() {
  segundosTimer++;
  segundosText.innerHTML = zeroAdd(segundosTimer);
  if (segundosTimer === 60) {
    segundosTimer = 00;
    setMinutes();
  }
}

function iniciaTempo() {
  tempo = setInterval(() => {
    zeroAdd(setSeconds());
  }, 1000);
}

iniciar.addEventListener("click", function (e) {
  clearInterval(tempo);
  relogio.style.color = "green";
  iniciaTempo();
});
pausar.addEventListener("click", function (e) {
  relogio.style.color = "red";
  clearInterval(tempo);
});
zerar.addEventListener("click", function (e) {
  relogio.style.color = "black";
  clearInterval(tempo);
  segundosTimer = 0;
  minutosTimer = 0;
  horasTimer = 0;
  segundosText.innerHTML = "00";
  minutosText.innerHTML = "00";
  horasText.innerHTML = "00";
});
