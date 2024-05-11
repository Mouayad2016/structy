const undirectedPath = (edges, nodeA, nodeB) => {
	const graph = buildGraph(edges);
	return hasPathRecursive(graph, nodeA, nodeB, new Set());
};

function hasPathRecursive(graph, src, dis, visited) {
	if (src === dis) return true;
	if (visited.has(src)) return false;
	visited.add(src);
	for (let n of graph[src]) {
		if (hasPathRecursive(graph, n, dis, visited)) return true;
	}
	return false;
}

function buildGraph(edges) {
	const graph = {};
	for (let edge of edges) {
		let [a, b] = edge;
		if (!(a in graph)) graph[a] = [];
		if (!(b in graph)) graph[b] = [];
		graph[a].push(b);
		graph[b].push(a);
	}
	return graph;
}

function dfs(src, des, edges) {
	const visited = new Set();
	const graph = buildGraph(edges);
	const stack = [src];
	while (stack.length > 0) {
		if (src === des) return true;
		const current = stack.pop();
		if (visited.has(current)) {
			continue;
		}
		visited.add(current);
		for (let i of graph[current]) {
			if (i === des) return true;
			stack.push(i);
		}
	}
	return false;
}

const edges = [
	["i", "j"],
	["k", "i"],
	["m", "k"],
	["k", "l"],
	["o", "n"],
];

console.log(dfs("m", "j", edges));
console.log(undirectedPath(edges, "m", "j"));
