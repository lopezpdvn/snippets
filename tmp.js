'use strict'; const log = console.log; (async ()=>{

const gen = function* () {};
Promise.all(gen())
.then(   () => log('5555'))
.catch(  () => log('1111'))
.finally(() => log('9999'));
log('2222');

})();
