'use strict'; const log =console.log; (async ()=>{

class Grid {
  static readonly origin = {x: 0, y: 0};

  getDistFromOrgn(pnt: {x: number; y: number;}) {
    const x = (pnt.x - Grid.origin.x);
    const y = (pnt.y - Grid.origin.y);
    return Math.sqrt(x * x + y * y) / this.scale;
  }
  constructor (public scale: number) { }
}

const grid1 = new Grid(1.0);  // 1x scale
const grid2 = new Grid(5.0);  // 5x scale
log(grid1.getDistFromOrgn({x: 10, y: 10}));
log(grid2.getDistFromOrgn({x: 10, y: 10}));

// [output]
// 14.142135623730951
// 2.8284271247461903

})();