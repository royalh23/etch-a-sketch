function changeBg(e) {
  e.target.style.backgroundColor = "black";
}

function createGrid() {
  for (let i = 1; i <= 256; i++) {
    const square = document.createElement("div");
    square.style.border = "1px solid black";
    square.style.width = `${Math.floor(500/16)}px`;
    square.style.height = `${Math.floor(500/16)}px`;
    container.appendChild(square);
  }
}


const container = document.querySelector(".container");
createGrid();
const squares = document.querySelectorAll(".container>div");

squares.forEach(square => square.addEventListener("mouseover", changeBg));