/* A non-empty str containing letters A-Z is
encoded to nums w/ A->1, B->2, ..., Z->26.
Enumerate f.

Ex0: ""    -> [""]
Ex1: "1"   -> ["A"]
Ex2: "12"  -> ["AB" , "L"]
Ex3: "226" -> ["BBF", "BZ", "VF"]
Ex4: "111" -> ["AAA", "AK", "KA"]               */

const f = function* (s) {
  if(s === undefined || s === null)
    throw new Error();
  yield* _g(s.length, s);
};

const _g = function* g(k, s) {
  if(k < 0) return;
  if(!k) {
    yield '';
    return;
  }

  if(k === 1){
    if(s[0] !== '0')
      yield dict[parseInt(s[0])];
    return;
  }

  if(s[k-1] !== '0') {
    const c_k = dict[parseInt(s[k-1])];
    for(const c of g(k - 1, s))
      yield c + c_k;
  }

  const digit2 = parseInt(s.slice(k-2, k));
  if(26 < digit2 || digit2 < 10)
    return;
  const c_k = dict[digit2];
  for(const c of g(k - 2, s))
    yield c + c_k;
};

const dict = [...'AABCDEFGHIJKLMNOPQRSTUVWXYZ'],
      eq = require('assert').deepStrictEqual;

eq([...f('')], ['']);
eq([...f('1')], ['A']);
eq([...f('12')], ['AB', 'L']);
eq([...f('226')], ['BBF', 'VF', 'BZ']);
eq([...f('111')], ['AAA', 'KA', 'AK']);
