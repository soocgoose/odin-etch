let grid = document.querySelector('#grid');

for (let i = 0; i < 256; i++) {
	let tile = document.createElement("div");
	tile.className = "tile";

	grid.appendChild(tile);
}

