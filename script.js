const canvas = document.querySelector('#canvas');
const eraser = document.querySelector('#eraser');
const clear = document.querySelector('#clear');
const colorpicker = document.querySelector('#colorpicker');

let side = 48;
setCanvas();

const size = document.getElementById('size');
size.addEventListener('mouseup', (e) => {
  side = e.target.value;
  setCanvas();
})

clear.addEventListener('click', setCanvas);

// functions below
function setCanvas() {
  removeChildren(canvas);
  for (let i = 0; i < (side ** 2); i++) {
    square = document.createElement('div');
    square.setAttribute('style', `height: ${640/side}px; \
    width: ${640/side}px; \
    background-color: white;`)
    canvas.appendChild(square);
    paint();
  }
}

function paint() {
  square.addEventListener('mouseover', (e) => {
    if (e.buttons === 1) {
      e.target.setAttribute('style', `height: ${640/side}px; \
      width: ${640/side}px; \
      background-color: ${colorpicker.value}`);
    }
  });
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
