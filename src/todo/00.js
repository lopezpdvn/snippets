'use strict'; const log = console.log; (async ()=>{

const toLookup = (source, keySelector,
                  elementSelector = e => e) => {
  const ht = new Map();
  for(const e of source) {
    const key   = keySelector(e);
    const value = elementSelector(e);
    const selected = ht.get(key);
    try {
      selected.push(value);
    }
    catch(e) {
      if(selected ||
        !(e instanceof TypeError))
        throw e;
      ht.set(key, [value]);
    }
  }
  return ht;
}

const x = ['a', 'b', 'c', 'a', 'b', 'a'];

const frequencyCounter =
  toLookup(
    x,
    e => e);

frequencyCounter.forEach(
  (v, k) =>
    log(`${k}: ${v.length}`)
);

})();
