'use strict'; const log = console.log; (async ()=>{

class SortedArray {

  static InsertionSort(a, n) {
    for(let o = 1; o < n; o++) {
      for(let i = o; i > 0 && a[i-1] > a[i]; i--) {
        [a[i-1], a[i]] = [a[i], a[i-1]];
      }
    }
    // Invariant: a[:o] sorted
  }

}

})();
