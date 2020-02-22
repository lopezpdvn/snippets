'use strict'; const log =console.log; (async ()=>{

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

const a = new GenericNumber<number>();
a.zeroValue = 0;
a.add = (x, y) => x + y;
log(a.add(a.zeroValue, 10));

const b = new GenericNumber<string>();
b.zeroValue = "";
b.add = (x, y) => x + y;
log(b.add(b.zeroValue, "test"));

})();