'use strict'; const log = console.log; (async ()=>{

// Given two strings s and t, write a function to
// determine if t is an anagram of s.
// brute force
const f = (s, t) => {
  if(s.length !== t.length)
    return false;

  return new Set(
    [s, t].map(x =>
      [...x].sort((a, b) => a.localeCompare(b))
            .join('')))
    .size === 1;

};

})();
