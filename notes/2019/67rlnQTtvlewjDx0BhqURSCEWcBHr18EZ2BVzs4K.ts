'use strict'; const log =console.log; (async ()=>{

const notSure: any = 4;

// OK, ifItExists might exist at runtime
notSure.ifItExists();

// OK, toFixed exists but compiler doesn't check
notSure.toFixed();

const prettySure: Object = 4;

// Error: Property toFixed doesn't exist on
// type Object
prettySure.toFixed();

})();