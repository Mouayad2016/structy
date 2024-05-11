function connectedComponentsCount(graph) {
	let count = 0;
	const visited = new Set();
	for (let key of Object.keys(graph)) {
		if (!visited.has(parseInt(key))) {
			if (key % 2 == 1) {
				bfs(key, graph, visited);
				count++;
			} else {
				dfs(key, graph, visited);
				count++;
			}
		}
	}
	return count;
}

function dfs(current, graph, visited) {
	if (!visited.has(current)) {
		visited.add(current);
		for (let neighbor of graph[current]) {
			dfs(neighbor, graph, visited);
		}
	}
}

function bfs(src, graph, visited) {
	const queue = [src];
	while (queue.length > 0) {
		const current = queue.shift();
		if (!visited.has(current)) {
			visited.add(current);
			for (let neighbor of graph[current]) {
				if (!visited.has(neighbor)) {
					queue.push(neighbor);
				}
			}
		}
	}
}

const graph = {
	3: [],
	4: [6],
	6: [4, 5, 7, 8],
	8: [6],
	7: [6],
	5: [6],
	1: [2],
	2: [1],
};

console.log(connectedComponentsCount(graph));
