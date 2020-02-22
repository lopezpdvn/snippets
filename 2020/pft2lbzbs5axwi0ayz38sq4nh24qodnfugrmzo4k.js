'use strict'; const log = console.log; (async ()=>{

const toLookup = (source, keySelector,
                  elementSelector = e => e) => {
  const ht = new Map();
  for(const e of source) {
    const key   = keySelector(e);
    const value = elementSelector(e);
    let selected;
    if(undefined === (selected = ht.get(key)))
      ht.set(key, [value])
    else
      selected.push(value)
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
