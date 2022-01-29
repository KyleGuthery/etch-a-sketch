const container = document.getElementById("container");
const reset = document.getElementById("reset");
const shake = document.getElementById("shake");

function createGrid(size, WIDTH) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.className = 'row';

    for(let j = 0; j < size; j++) {
      let cell = document.createElement('div');
      cell.className = 'pixel';
      cell.style.width = `${WIDTH}px`;
      cell.style.height = `${WIDTH}px`;
      row.appendChild(cell);
    }
    container.appendChild(row);
  }

}

function sketch() {
  const size = window.prompt("How big do you want your Etch-a-Sketch? (Pick a grid size between 10-100)");

  shake.value = size
  if (size <= 100 && size >= 10) {
    pixelSize(size);

    const etch = document.getElementById("container");
    etch.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#505050";
    });
  } else {
    alert("Size must be between 10 and 100.")
    location.reload();
  }
}

function pixelSize(size) {
  const sketch = 500;
  const width = sketch/size;

  createGrid(size, width);
}

function shaker() {
  const pixels = document.getElementsByClassName("pixel");

  while(pixels.length > 0){
    pixels[0].parentNode.removeChild(pixels[0]);
  }  

  container.classList.add("apply-shake");

  container.addEventListener("animationend", (e) => {
    container.classList.remove("apply-shake");
  })

  pixelSize(shake.value);
}

sketch();

reset.addEventListener("click", (e) => {location.reload();})

shake.addEventListener("click", (e) => {shaker();})