const largestComponent = (graph) => {
	const visited = new Set();
	componentCount = [];
	let count = 0;
	for (let key of Object.keys(graph)) {
		if (visited.has(key)) continue;
		componentCount.push(dfsRecursive(key, graph, visited, count));
	}

	let max = 0;
	for (let a of componentCount) {
		if (a > max) max = a;
	}
	return max;
};

function dfs(src, graph, visited) {
	const stack = [src];
	let countNodes = 0;

	while (stack.length > 0) {
		current = stack.pop();
		if (visited.has(current)) continue;
		countNodes++;
		visited.add(current);
		for (let n of graph[current]) {
			stack.push(n);
		}
	}
	return countNodes;
}

function dfsRecursive(src, graph, visited, count) {
	if (visited.has(src)) {
		return 0;
	}
	visited.add(src);
	count = 1;
	for (let n of graph[src]) {
		if (!visited.has(n)) {
			count += dfsRecursive(n, graph, visited, count);
		}
	}
	return count;
}

graph = {
	0: ["4", "7"],
	1: [],
	2: [],
	3: ["6"],
	4: ["0"],
	6: ["3"],
	7: ["0"],
	8: [],
};

console.log(largestComponent(graph));
