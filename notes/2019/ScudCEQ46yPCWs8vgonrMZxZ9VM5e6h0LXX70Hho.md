---
layout: page
title: Note
permalink: /note/
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

interface Square { kind: 'square'; size: number; }
interface Rectangle { kind: 'rectangle';
                  width: number; height: number; }
interface Circle {kind: 'circle'; radius: number;}
interface Triangle { kind: 'triangle';
                                 radius: number; }
type Shape = Square | Rectangle | Circle;

const assertNever = (x: never): never => {
  throw new Error(`Unexpected object: ${x}`);
};

const area = (s: Shape) => {
  switch (s.kind) {
    case 'square':    return s.size * s.size;
    case 'rectangle': return s.height * s.width;
    case 'circle':    return Math.PI *
                             s.radius ** 2;
    default:          return assertNever(s);
  }
}

})();
{% endhighlight %}

Output

```
tsc
<nothing printed to console, compilation OK>
```
