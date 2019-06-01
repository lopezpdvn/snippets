'use strict'; const log =console.log; (async ()=>{

const sqrIt = (rect: {h: number, w?: number}) =>
  rect.h * (rect.w !== undefined ?
            rect.w : rect.h);

log(sqrIt({h: 2}));
log(sqrIt({h: 2, w: 3}));

})();