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