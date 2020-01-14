'use strict'; const log = console.log; (async ()=>{

const x = new Map([
  ['one' , 'uno' ],
  ['two' , 'dos' ],
  ['five', 'cinco']
]);

const keyRetrieve = ['five', 'seven'];

// Pattern to catch specific exceptions.
try {
  keyRetrieve.forEach(
    y =>
      log(x.get(y).toUpperCase()));
      // above line might throw TypeError: Cannot
      // read property 'toUpperCase' of undefined
}
catch(e) {
  if(!(e instanceof TypeError))
    throw e;
  log('key does not exist');
}

// CINCO
// key does not exist

})();
