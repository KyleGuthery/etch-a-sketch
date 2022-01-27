const container = document.querySelector("#container");

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = 'row';

    for(let j = 0; j < size; j++) {
      let cell = document.createElement('div');
      cell.className = 'pixel';
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

function sketch() {
  let size = window.prompt("How big do you want your Etch-a-Sketch?");
  
  createGrid(size);

  let etch = document.getElementById("container");
  etch.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "#505050";
  });
}

sketch();