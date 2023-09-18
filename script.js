function changeBg(e) {
  e.target.style.backgroundColor = "black";
}

function createGrid(n) {
  for (let i = 1; i <= n * n; i++) {
    const square = document.createElement("div");
    square.style.border = "1px solid black";
    square.style.width = `${500/n}px`;
    square.style.height = `${500/n}px`;
    container.appendChild(square);
  }
}


const container = document.querySelector(".container");
const button = document.querySelector("button");

createGrid(16);

button.addEventListener("click", () => {
  let number = +prompt("Enter the number of squares per side"); 
  container.innerHTML = "";
  createGrid(number);
  const squares = document.querySelectorAll(".container>div");
  squares.forEach(square => square.addEventListener("mouseover", changeBg));
});

const squares = document.querySelectorAll(".container>div");
squares.forEach(square => square.addEventListener("mouseover", changeBg));