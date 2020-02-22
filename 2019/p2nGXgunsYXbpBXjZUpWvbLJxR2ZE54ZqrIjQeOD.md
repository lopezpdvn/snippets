---
layout: page
title: home
---

{% highlight javascript %}
'use strict'; const log = console.log; (async ()=>{

class SortedArray {

  Insert(x) {
    let i = this.count;
    for(; i > 0 && x < this._a[i-1]; i--) {
      this._a[i] = this._a[i-1];
    }
    this._a[i] = x;
    this.count++;
    return i;
  }

}

})();
{% endhighlight %}
