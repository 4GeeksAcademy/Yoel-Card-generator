/* eslint-disable */
import "bootstrap";
import "./style.css";

//Creador de carta
function getNewCard() {
  var suits = ["hearts", "spades", "diamonds", "clubs"];
  var suitsSimbols = ["♥", "♠", "♦", "♣"];
  var numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var card = document.getElementById("myCard");
  var body = document.getElementById("body");
  var header = document.getElementById("header");
  var footer = document.getElementById("footer");
  let randomSuit = Math.floor(Math.random() * suits.length);
  let randomNumber = Math.floor(Math.random() * numbers.length);
  card.className = `card p-0 ${suits[randomSuit]}`;
  header.innerHTML = suitsSimbols[randomSuit];
  body.innerHTML = numbers[randomNumber];
  footer.innerHTML = suitsSimbols[randomSuit];
}

//Crea carta al cargar
window.onload = getNewCard();

//Creador de carta boton
document.getElementById("drag").addEventListener("click", e => {
  getNewCard();
});

//Creador de carta cada X segundos
let timer = document.getElementById("timer");
timer.addEventListener("change", e => {
  if (e.target.checked == true) {
    let myTimer = setInterval(
      getNewCard,
      parseInt(document.getElementById("time").value) * 1000
    );
    timer.addEventListener("change", evnt => {
      if (evnt.target.checked == false) {
        clearInterval(myTimer);
      }
    });
  }
});

//Editor de tamaño
document.getElementById("width").addEventListener("change", e => {
  if (e.target.value == "") {
    document.getElementById("myCard").style.width = "300px";
  }
  document.getElementById("myCard").style.width = e.target.value + "px";
});
document.getElementById("height").addEventListener("change", e => {
  if (e.target.value == "") {
    document.getElementById("myCard").style.height = "400px";
  }
  document.getElementById("myCard").style.height = e.target.value + "px";
});
