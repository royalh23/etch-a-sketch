const cdiv = document.querySelector('.container');

// Add 256 divs
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div');
  cdiv.appendChild(div);
}

// Add event listener to square divs
cdiv.childNodes.forEach(div => div.addEventListener('mouseenter', changeColor));

// Button to create the new grid
const button = document.querySelector('button');
button.addEventListener('click', createGrid);

function createGrid() {
  // Clear the grid
  cdiv.childNodes.forEach(div => div.style.background = "white");

  let n = prompt("How many squares per side do you want in the new grid?");
  if (n > 100) {
    alert("The maximum limit is 100.");
    return;
  } else if (n === null || n === "") {
      return;
  } else {
      clearOldGrid();

      createNewGrid(n);
      
      // Add an event listener to the divs again (since they had been deleted)
      cdiv.childNodes.forEach(div => {
        div.addEventListener('mouseenter', changeColor)
    }); 
  }
}

function changeColor(e) {
  e.target.style.background = "black";
}

function clearOldGrid() {
  while (cdiv.firstChild) {
    cdiv.removeChild(cdiv.firstChild);
  }
}

function createNewGrid(n) {
  for (let c = 1; c < n * n + 1; c++) {
    const div = document.createElement('div');
    div.style.width = `${480 / n}px`;
    div.style.height = `${480 / n}px`;
    cdiv.appendChild(div);
  }
}