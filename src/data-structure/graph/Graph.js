export default class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(src, dest) {
    // It's bidirectional
    this.adjList.get(src).push(dest);
    this.adjList.get(dest).push(src);
  }

  print() {
    for (let [v, adj] of this.adjList.entries()) {
      console.log(`${v} -> ${adj.join(' ')}`);
    }
  }
}