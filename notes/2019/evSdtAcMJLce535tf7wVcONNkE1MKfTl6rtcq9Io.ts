'use strict'; const log =console.log; (async ()=>{

enum Color {
  Red = 1, Green, Blue
}

const x: Color  = Color.Green;
const y: string = Color[3];

log(x);
log(y);

})();
