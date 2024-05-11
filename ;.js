const islandCount = (grid) => {
	const visited = new Set();

	const height = grid.length - 1;
	const width = grid[0].length - 1;
	let cont = 0;
	for (let x = 0; x < height; x++) {
		for (let y = 0; y < height; y++) {
			cont++;
		}
	}
	console.log(cont);
};

function getNeighbor(src, grid) {
	const movs = [
		[-1, 0], //  Up
		[0, 1], // right
		[1, 0], // down
		[0, -1], // left
	];
	const neighbors = [];
	const [srcx, srcy] = src;

	const height = grid.length;
	const width = grid[0].length;

	for (let [x, y] of movs) {
		if (srcx + x == -1 || srcy + y == -1) continue;
		//             height - 1 cause array start at 0 not 1 same for width
		if (srcx + x > height - 1 || srcy + y > width - 1) continue;
		neighbors.push([srcx + x, srcy + y]);
	}

	return neighbors;
}

function dfs(src, visited, grid) {
	if (visited.has(JSON.stringify(src))) {
		return 0;
	}
	let count = 1;

	visited.add(JSON.stringify(src));
	const neighbors = getNeighbor(src, grid);

	for (let [nx, ny] of neighbors) {
		if (grid[nx][ny] === "W") {
			continue;
		}

		count += dfs([nx, ny], visited, grid);
	}
	return count;
}

const grid = [
	["W", "L", "W", "W", "W"],
	["W", "L", "W", "W", "W"],
	["W", "W", "W", "L", "W"],
	["W", "W", "L", "L", "W"],
	["L", "W", "W", "L", "L"],
	["L", "L", "W", "W", "W"],
];
islandCount(grid); // -> 3
// console.log(dfs([0, 0], new Set(), grid));
