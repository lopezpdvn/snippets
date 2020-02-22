'use strict'; const log =console.log; (async ()=>{

enum E {
    Foo,
    Bar,
}

const f = (x: E) => {
  if(x === E.Foo && x === E.Bar) {
    ;
  }
};

})();