'use strict'; const log = console.log; (async ()=>{

class Graph {
  constructor(nVertices) {
    this.graph = new Map();
    this.V = nVertices;
  }

  addEdge(u, v) {
    let uEdges;
    if(undefined ===
                (uEdges = this.graph.get(u))) {
      uEdges = [];
      this.graph.set(u, uEdges);
    }
    uEdges.push(v);
    return this;
  }

  topologicalSort() {
    this.buildInDegrees();
    log(this.inDegs);
  }

  buildInDegrees() {
    this.inDegs = new Array(this.V).fill(0);
    this.graph.forEach((v,u) =>
      v.forEach(e => this.inDegs[e] += 1));
  }
}

const g = new Graph(6).addEdge(5, 2).addEdge(5, 0)
        .addEdge(4, 0).addEdge(4, 1).addEdge(2, 3)
        .addEdge(3, 1);

log(g);
const y = g.topologicalSort();
log(y);

})();
