'use strict'; const log = console.log; (async ()=>{

const gen = function* () {};
Promise.all(gen())
       .then(log);

})();
