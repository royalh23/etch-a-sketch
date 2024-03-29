function changeBg(e) {
  const hexChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hexChars.length);
    hexColor += hexChars[randomNumber];
  }
  e.target.style.backgroundColor = `${hexColor}`;
}

function createGrid(n) {
  for (let i = 1; i <= n * n; i++) {
    const square = document.createElement("div");
    square.style.width = `${500/n}px`;
    square.style.height = `${500/n}px`;
    container.appendChild(square);
  }
}

function createNewGrid() {
  let number = getAnswer();
  container.innerHTML = "";
  createGrid(number);
  addEventListenersToSquares();
}

function getAnswer() {
  let number;
  while (true) {
    number = prompt("Enter the number of squares per side");
    if (number >= 1 && number <= 100 || number === null) {
      break;
    }
    alert("Please enter a number between 1 and 100, inclusive");
  }
  return number;
}

function addEventListenersToSquares() {
  const squares = document.querySelectorAll(".container>div");
  squares.forEach(square => square.addEventListener("mouseover", changeBg));
}


const container = document.querySelector(".container");
const button = document.querySelector("button");

createGrid(16);
addEventListenersToSquares();
button.addEventListener("click", createNewGrid);