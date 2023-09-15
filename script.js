function changeBg(e) {
  console.log(e.target);
}


function createGrid() {
  for (let i = 1; i <= 256; i++) {
    const container = document.querySelector(".container");
    const square = document.createElement("div");
    square.style.border = "1px solid black";
    square.style.width = `${Math.floor(500/16)}px`;
    square.style.height = `${Math.floor(500/16)}px`;
    container.appendChild(square);
  }
}

createGrid();