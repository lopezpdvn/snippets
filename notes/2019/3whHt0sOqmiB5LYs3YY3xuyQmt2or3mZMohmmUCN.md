---
layout: page
title: home
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

class SortedArray {
  static SelectionSort(a, n) {
    for(let o = 0, min = 0; o < n - 1; min = ++o) {
      for(let i = o + 1; i < n; i++)
        if(a[min] > a[i])
          min = i;
      if(o !== min)
        [a[o], a[min]] = [a[min], a[o]];
    }
  }
}

})();
{% endhighlight %}
