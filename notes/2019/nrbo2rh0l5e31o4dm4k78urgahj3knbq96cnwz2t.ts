'use strict'; const log =console.log; (async ()=>{

const someValue: any = 'this is a string';

// Assert `someValue : string`
const strLength: number =
  (someValue as string).length;

})();