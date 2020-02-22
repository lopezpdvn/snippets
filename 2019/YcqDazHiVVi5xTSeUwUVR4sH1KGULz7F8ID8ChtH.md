---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

enum ShapeKind {
  CircleShape,
  SquareShape,
}

interface Circle {
  kind: ShapeKind.CircleShape;
  radius: number;
}

interface Square {
  kind: ShapeKind.SquareShape;
  sideLength: number;
}

const c: Circle = {
  kind: ShapeKind.SquareShape,
  radius: 100,
}

})();
{% endhighlight %}

Output

```
tsc

tmp.ts:19:3 - error TS2322: Type 'ShapeKind.SquareShape' is not assignable to type 'ShapeKind.CircleShape'.

19   kind: ShapeKind.SquareShape,
     ~~~~

  tmp.ts:9:3
    9   kind: ShapeKind.CircleShape;
        ~~~~
    The expected type comes from property 'kind' which is declared here on type 'Circle'


Found 1 error.
```
