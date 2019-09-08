'use strict'; const log = console.log; (async ()=>{

const x = new Set();
x.add('one')

log(x.delete('two'));
log(x.delete('three'));
log(x.delete('one'));
log(x.delete('one'));
log(x.delete('one'));

})();
