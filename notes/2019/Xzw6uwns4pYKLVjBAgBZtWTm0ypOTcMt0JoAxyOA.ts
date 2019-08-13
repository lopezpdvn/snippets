'use strict'; const log =console.log; (async ()=>{

enum Direction0 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction1 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

log(Direction0.Left);
log(Direction1.Right);

})();