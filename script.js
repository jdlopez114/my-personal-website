// const h2 = document.createElement("h2");
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const button = document.getElementById('pressButton');
let body = document.querySelector('body');

function randomize() {
    body.style.color = randomColors();
  }
  
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}