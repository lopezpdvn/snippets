'use strict'; const log = console.log; (async ()=>{

const uri = 'https://mozilla.org/?x=шеллы';
const y = encodeURI(uri);
log(y);

// https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B

})();