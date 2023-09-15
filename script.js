const container = document.querySelector(".container");

function createGrid() {
  for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${Math.floor(500/16)}px`;
    square.style.height = `${Math.floor(500/16)}px`;
    container.appendChild(square);
  }
}

createGrid();