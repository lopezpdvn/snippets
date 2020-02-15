'use strict'; const log = console.log; (async ()=>{

const take = function* (a, n = Number()) {
  for(const x of a) {
    if(!n)
      return;
    yield x;
    n--;
  }
};

const range =
  function* (start = Number(), n = -1) {
  while(n) {
    yield start++;
    n--;
  }
};

for(const x of take(range(), 50))
  log(x);

})();
