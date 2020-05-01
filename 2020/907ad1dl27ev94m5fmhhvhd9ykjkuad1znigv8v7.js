'use strict'; const log = console.log; (async ()=>{

/* Given alphanumeric str S, we can transform
 * every letter individually to be lowercase or
 * uppercase to create another str. Return list of
 * all possible strings we could create. Examples:

   'a1b2'  -> ['a1b2', 'a1B2', 'A1b2', 'A1B2']
   '3z4'   -> ['3z4', '3Z4']
   '12345' -> ['12345'] */

const letterCasePermutation = S => {
  const digits = '0123456789';

  const sets = [...S].map(
    c => digits.includes(c) ? [c]
           : [c.toLowerCase(), c.toUpperCase()]);

  return cartesianProd(sets).map(s => s.join(''));
};

const cartesianProd = arrs => {
  if(!arrs || !arrs.length || arrs.some(a => !a))
    throw new Error('invalid input');

  if(arrs.some(a => !a.length))
    return [];

  let A = [[]];
  for(const a of arrs) {
    const _A = A;
    A = new Array(_A.length * a.length);

    let i = 0;
    for(const tuple of _A)
      for(const e of a)
        A[i++] = tuple.concat(e);
  }

  return A;
};

log(letterCasePermutation('a1b2'));
log(letterCasePermutation('3Z4'));
log(letterCasePermutation('12345'));

})();
