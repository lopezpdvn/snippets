---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

enum E {
    Foo,
    Bar,
}

const f = (x: E) => {
  if(x === E.Foo && x === E.Bar) {
    ;
  }
};

})();
{% endhighlight %}

Output

```
tsc
tmp.ts:9:21 - error TS2367: This condition will always return 'false' since the types 'E.Foo' and 'E.Bar' have no overlap.

9   if(x === E.Foo && x === E.Bar) {
                      ~~~~~~~~~~~


Found 1 error.
```
