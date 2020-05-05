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

    const sourcesQueue = this.inDegs.reduce(
      (a, inDeg, vertex) =>
        inDeg ? a : a.concat(vertex),
      []);

    let visitCnt = 0;
    const topOrder = [];

    while(sourcesQueue.length) {
      const u = sourcesQueue.shift();
      topOrder.push(u);

      let neighbors;
      if(undefined ===
                (neighbors = this.graph.get(u)))
        neighbors = [];
      for(const v of neighbors)
        if(!--this.inDegs[v]) {
          sourcesQueue.push(v);
        }

      visitCnt++;
    }

    return visitCnt !== this.V ? [] : topOrder;
  }

  buildInDegrees() {
    this.inDegs = new Array(this.V).fill(0);
    this.graph.forEach(v =>
      v.forEach(e => this.inDegs[e]++));
  }
}

const g = new Graph(6).addEdge(5, 2).addEdge(5, 0)
        .addEdge(4, 0).addEdge(4, 1).addEdge(2, 3)
        .addEdge(3, 1);

const y = g.topologicalSort();
log(y);

})();
