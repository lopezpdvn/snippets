'use strict'; const log = console.log; (async ()=>{

  // max binary heap
  static trickleDown(a, i, n) {
    while(2*i + 1 < n) {
      let iChild = 2*i + 1;
      if(iChild + 1 < n && a[iChild] < a[iChild + 1])
        iChild++;
      if(a[i] < a[iChild]) {
        [a[i], a[iChild]] = [a[iChild], a[i]];
        i = iChild;
      }
      else
        return;
    }
  }

})();
