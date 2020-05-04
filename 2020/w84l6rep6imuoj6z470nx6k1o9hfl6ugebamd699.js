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
}

const g = new Graph(6).addEdge(5, 2).addEdge(5, 0)
        .addEdge(4, 0).addEdge(4, 1).addEdge(2, 3)
        .addEdge(3, 1);

log(g);

})();
