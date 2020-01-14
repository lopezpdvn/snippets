'use strict'; const log = console.log; (async ()=>{

const x = new Map([
  ['one' , 'uno' ],
  ['two' , 'dos' ],
  ['five', 'cinco']
]);

['five', 'seven', 'one'].forEach(
  k => {
    // Pattern to get the value associated with
    // the specified key.
    let value;
    if(undefined === (value = x.get(k))) {
      log(`key ${k} does not exist`);
      return;
    }

    log(value.toUpperCase());
  }
);

// CINCO
// key seven does not exist
// UNO

})();
