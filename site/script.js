let grid = document.querySelector('#grid');

const sideLength = 16;
const tileBasis = 100 / sideLength;

for (let i = 0; i < Math.pow(sideLength, 2); i++) {
	let tile = document.createElement("div");
	tile.className = "tile";
	tile.style.setProperty("flex-basis", tileBasis + '%');
	tile.addEventListener("mouseover", (event) => {event.target.classList.add("active", "activated");});
	tile.addEventListener("mouseout", (event) => {event.target.classList.remove("active");});

	grid.appendChild(tile);
}

