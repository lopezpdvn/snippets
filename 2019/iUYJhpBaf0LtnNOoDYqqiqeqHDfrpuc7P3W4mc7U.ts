'use strict'; const log =console.log; (async ()=>{

enum ShapeKind {
  CircleShape,
  SquareShape,
}

interface Circle {
  kind: ShapeKind.CircleShape;
  radius: number;
}

interface Square {
  kind: ShapeKind.SquareShape;
  sideLength: number;
}

const c: Square = {
  kind: ShapeKind.SquareShape,
  radius: 100,
}

})();