'use strict'; const log = console.log; (async ()=>{

static BubbleSort(a, n) {
  for(let swapped = true, o = n - 1;
      swapped && o > 0; o--) {
    swapped = false;
    for(let i = 0; i < o; i++) {
      if(a[i] > a[i+1]) {
        [a[i], a[i+1]] = [a[i+1], a[i]];
        swapped = true;
      }
    }
  }
}

})();
