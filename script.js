const cdiv = document.querySelector('.container');

// Add 256 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  cdiv.appendChild(div);
}

// Add event listener to square divs
cdiv.childNodes.forEach(div => div.addEventListener('mouseenter', changeColor));

function changeColor(e) {
  e.target.style.background = "black";
}

// Button to create the new grid
const button = document.querySelector('button');
button.addEventListener('click', createGrid);

function createGrid() {
  let n = prompt("How many squares per side do you want in the new grid?");
  if (n > 100) {
    alert("The maximum limit is 100.");
    return;
  }
}