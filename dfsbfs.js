const hasPathBfs = (graph, src, dst) => {
	const stack = [src];
	while (stack.length > 0) {
		const current = stack.shift();
		for (let i of graph[current]) {
			if (i === dst) return true;
			stack.push(i);
		}
	}
	return false;
};

const hasPathDfs = (graph, src, dst) => {
	const stack = [src];
	while (stack.length > 0) {
		const current = stack.pop();
		for (let i of graph[current]) {
			if (i === dst) return true;
			stack.push(i);
		}
	}
	return false;
};



const graph = {
	f: ["g", "i"],
	g: ["h"],
	h: [],
	i: ["g", "k"],
	j: ["i"],
	k: [],
};
console.log(hasPathDfs(graph, "f", "k"));
console.log(hasPathBfs(graph, "f", "k"));
