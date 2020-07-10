'use strict'; const log = console.log; (async ()=>{

const uInt2Str = (num, byteLength = 4) => {
  const bytes = new Array(byteLength);
  for(let i = byteLength - 1; i >= 0; i--)
    bytes[i] = num >>> (i * 8) & 0xff;
  return bytes;
};

log(String.fromCharCode(...uInt2Str(255)));

// ÿ

})();
