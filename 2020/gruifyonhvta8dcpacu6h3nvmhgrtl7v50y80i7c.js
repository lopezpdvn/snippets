'use strict'; const log = console.log; (async ()=>{

const x                  = 8,
      log_of_x_to_base_b = 3;

const b =
  Math.pow(
    x,
    1/log_of_x_to_base_b);

log(b);

// 2

})();
