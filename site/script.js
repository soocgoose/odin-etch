const grid = document.querySelector('#grid');
const settings = document.querySelector('#settings');

document.querySelector('#clear-grid').addEventListener('click', (event) => {
	for (let i = 0; i < grid.children.length; i++) {
		grid.children[i].className = "tile";
	}
});

function createTileGrid(sideLength = 16) {
	const tileBasis = 100 / sideLength;

	for (let i = 0; i < Math.pow(sideLength, 2); i++) {
		let tile = document.createElement("div");
		tile.className = "tile";
		tile.style.setProperty("flex-basis", tileBasis + '%');

		tile.addEventListener("pointerenter", (event) => {event.target.classList.add("active", "activated");});
		tile.addEventListener("pointerleave", (event) => {event.target.classList.remove("active");});
		tile.addEventListener("pointerdown", (event) => {event.target.releasePointerCapture(event.pointerId);});

		grid.appendChild(tile);
	}
}

createTileGrid();

