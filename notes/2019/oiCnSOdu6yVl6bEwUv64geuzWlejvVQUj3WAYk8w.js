'use strict'; const log = console.log; (async ()=>{

class SortedArray {
  static BinarySearchIterative(a, n, x) {
    let min = 0, max = n - 1;

    while(min <= max) {
      const mid = Math.trunc((min + max) / 2);
      if(x < a[mid])
        max = mid - 1;
      else if(x > a[mid])
        min = mid + 1;
      else
        return mid;
    }

    return -1;
  }
}

const a = [0, 1, 2, 3, 4, 5];
log(
  SortedArray.BinarySearchIterative(
    a, a.length, 4));

})();
