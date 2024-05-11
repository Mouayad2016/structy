const shortestPath = (edges, nodeA, nodeB) => {
	const visited = new Set();
	const graph = buildGraph(edges);
	return bfs(nodeA, nodeB, graph, visited);
};

function bfs(src, dest, graph, visited) {
	const queue = [];
	const map = {};
	map[src] = 0;
	queue.push(map);

	while (queue.length > 0) {
		const currentMap = queue.shift();
		const current = Object.keys(currentMap)[0];
		if (visited.has(current)) continue;
		visited.add(current);

		if (current === dest) {
			return currentMap[current];
		}

		for (let neighbor of graph[current]) {
			const map = {};
			map[neighbor] = currentMap[current] + 1;
			queue.push(map);
		}
	}
	return -1;
}

function buildGraph(edges) {
	graph = {};
	for (let edge of edges) {
		let [a, b] = edge;
		if (!graph[a]) graph[a] = [];
		if (!graph[b]) graph[b] = [];
		graph[a].push(b);
		graph[b].push(a);
	}
	return graph;
}

const edges = [
	["m", "n"],
	["n", "o"],
	["o", "p"],
	["p", "q"],
	["t", "o"],
	["r", "q"],
	["r", "s"],
];

shortestPath(edges, "m", "s"); // -> 6
