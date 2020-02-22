'use strict'; const log = console.log; (async ()=>{

class SortedArray {
  delete(x) {
    const i = this.BinarySearch(x);
    if(i >= 0) {
      for(let j = i; j < this.count - 1; j++) {
        this._a[j] = this._a[j + 1];
      }
      this.count--;
    }
    return i;
  }
}

})();
