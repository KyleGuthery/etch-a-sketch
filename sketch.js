const container = document.querySelector("#container");

console.log(container);

function createGrid() {
  for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.className = 'row';

    for(let j = 0; j < 16; j++) {
      let cell = document.createElement('div');
      cell.className = 'pixel';
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

createGrid();

console.log(container);