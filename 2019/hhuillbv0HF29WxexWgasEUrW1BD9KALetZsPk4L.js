'use strict'; const log = console.log; (async ()=>{

const x = new Map();
x.set('one', 'uno');

log(x.delete('two'));
log(x.delete('three'));
log(x.delete('one'));
log(x.delete('one'));
log(x.delete('one'));

})();
