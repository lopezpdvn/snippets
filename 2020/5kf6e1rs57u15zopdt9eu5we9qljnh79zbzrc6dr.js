'use strict'; const log = console.log; (async ()=>{

const uInt2Str = (num, byteLength = 4) => {
  const bytes = new Array(byteLength);
  for(let i = byteLength - 1; i >= 0; i--)
    bytes[i] = num >>> (i * 8) & 0xff;
  return bytes;
};

const x = 168496141;
log(String.fromCharCode(...uInt2Str(x)));
log(uInt2Str(x).map(n => n.toString(16).padStart(2, '0')));
log(x.toString(16));

//
//
//
//
// [ '0d', '0c', '0b', '0a' ]
// a0b0c0d

// https://en.wikipedia.org/wiki/Endianness#Classical_example

})();
