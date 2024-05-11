const minimumIsland = (grid) => {
	const visited = new Set();
	let minSize = Infinity;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "W") continue;
			const islandSize = bfs([i, j], grid, visited);
			if (islandSize > 0 && minSize > islandSize) minSize = islandSize;
		}
	}
	return minSize;
};

function getNeighbors(src, grid) {
	moves = [
		[-1, 0], // Up
		[0, 1], // Left
		[1, 0], // Down
		[0, -1], // Right
	];
	const nb = [];
	const [srcx, srcy] = src;

	for (let [x, y] of moves) {
		if (
			srcx + x < 0 ||
			srcy + y < 0 ||
			srcx + x > grid.length - 1 ||
			srcy + y > grid[0].length - 1
		)
			continue;

		nb.push([srcx + x, srcy + y]);
	}
	return nb;
}

function bfs(src, grid, visited) {
	const queue = [src];
	let nodesCount = 0;
	while (queue.length > 0) {
		const currnet = queue.shift();
		if (visited.has(JSON.stringify(currnet))) continue;
		nodesCount++;
		visited.add(JSON.stringify(currnet));
		const neighbor = getNeighbors(currnet, grid);
		for (let [nx, ny] of neighbor) {
			if (grid[nx][ny] === "W") continue;
			if (!visited.has([nx, ny])) queue.push([nx, ny]);
		}
	}
	return nodesCount;
}
const grid = [
	["W", "L", "W", "W", "W"],
	["W", "L", "W", "W", "W"],
	["W", "W", "W", "L", "W"],
	["W", "W", "L", "L", "W"],
	["L", "W", "W", "L", "L"],
	["L", "L", "W", "W", "W"],
];

console.log(minimumIsland(grid));
