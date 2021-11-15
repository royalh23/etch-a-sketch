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
  } else if (n === null) {
      return;
  } else {
      // Clear the old grid
      while (cdiv.firstChild) {
        cdiv.removeChild(cdiv.firstChild);
      }

      // Create the new grid
      for (let c = 1; c < n * n + 1; c++) {
        const div = document.createElement('div');
        div.style.width = `${Math.floor(480 / n)}px`;
        div.style.height = `${Math.floor(480 / n)}px`;
        cdiv.style.width = `${Math.floor(480 / n) * n}px`;
        cdiv.style.height = `${Math.floor(480 / n) * n}px`;
        cdiv.appendChild(div);
      }
      
      // Add an event listener to the divs again (since they had been deleted)
      cdiv.childNodes.forEach(div => {
        div.addEventListener('mouseenter', changeColor)
      }); 
  }
}