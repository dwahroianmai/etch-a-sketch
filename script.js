const canvas = document.querySelector('#canvas');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const colorpicker = document.querySelector('#colorpicker');
const para = document.querySelector('p');
const rainbow = document.querySelector('#rainbow');

let square;
let side = 48;
setCanvas();

const size = document.getElementById('size');
size.addEventListener('input', (e) => {
  side = e.target.value;
  para.textContent = `${side}x${side}`;
  setCanvas();
})

clear.addEventListener('click', setCanvas);
eraser.addEventListener('click', () => {
  if (rainbow.textContent === "Rainbow: on" &&
  eraser.textContent === "Eraser: off") {
    eraser.textContent = "Eraser: on";
    rainbow.textContent = "Rainbow: off";
  } else if (eraser.textContent === "Eraser: off") {
    eraser.textContent = "Eraser: on";
  } else {
    eraser.textContent = "Eraser: off";
  } paintOnOff();
})

rainbow.addEventListener('click', () => {
  if (rainbow.textContent === "Rainbow: off" &&
    eraser.textContent === "Eraser: on") {
    rainbow.textContent = "Rainbow: on";
    eraser.textContent = "Eraser: off"
  } else if (rainbow.textContent === "Rainbow: on") {
    rainbow.textContent = "Rainbow: off";
  } else {
    rainbow.textContent = "Rainbow: on";
  } paintOnOff();
})

// functions below
function setCanvas() {
  removeChildren(canvas);
  for (let i = 0; i < (side ** 2); i++) {
    square = document.createElement('div');
    square.setAttribute('style', `height: ${640/side}px; \
    width: ${640/side}px; \
    background-color: white;`)
    canvas.appendChild(square);
    paintOnOff();
  }
}

function paintOnOff() {
  square.addEventListener('mouseover', (e) => {
    if (e.buttons === 1 && eraser.textContent === "Eraser: off"
    && rainbow.textContent === "Rainbow: off") {
      e.target.setAttribute('style', `height: ${640/side}px; \
      width: ${640/side}px; \
      background-color: ${colorpicker.value}`);
    } else if (e.buttons === 1 && eraser.textContent === "Eraser: on") {
      e.target.setAttribute('style', `height: ${640/side}px; \
      width: ${640/side}px; \
      background-color: white`);
    } else if (e.buttons === 1 && rainbow.textContent === "Rainbow: on") {
      e.target.setAttribute('style', `height: ${640/side}px; \
      width: ${640/side}px; \
      background-color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
    }
  });
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
