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

function getAnswer() {
  let number;
  while (true) {
    number = +prompt("Enter the number of squares per side");
    if (number >= 1 && number <= 100) {
      break;
    }
    alert("Please enter a number between 1 and 100, inclusive");
  }
  return number;
}


const container = document.querySelector(".container");
const button = document.querySelector("button");

createGrid(16);

const squares = document.querySelectorAll(".container>div");
squares.forEach(square => square.addEventListener("mouseover", changeBg));

button.addEventListener("click", () => {
  let number = getAnswer();
  container.innerHTML = "";
  createGrid(number);
  const squares = document.querySelectorAll(".container>div");
  squares.forEach(square => square.addEventListener("mouseover", changeBg));
});