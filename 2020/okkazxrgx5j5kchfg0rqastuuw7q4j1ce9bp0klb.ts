'use strict'; const log =console.log; (async ()=>{

class Point {
  x: number = Number();
  y: number = Number();
}

interface Point3d extends Point {
  z: number;
}

const point3d:
  Point3d =
    {x: 1, y: 2, z: 3};
  
log(point3d);
// { x: 1, y: 2, z: 3 }

})();