---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

// The kind of type of `Easing` is
// string literal type.
type Easing = "ein" | "eout" | "einout";

const doWithEase = (ease: Easing) : void => {
  if     (ease === "ein")    return null;
  else if(ease === "eout")   return null;
  else if(ease === "einout") return null;
  else
    // unreachable code
    return null;
};

doWithEase("ein");
doWithEase("eout");
doWithEase("einout");
doWithEase("hi");

})();
{% endhighlight %}

Output

(Compilation error)

```
tmp.ts:19:12 - error TS2345: Argument of type '"hi"' is not assignable to parameter of type 'Easing'.

19 doWithEase("hi");
              ~~~~


Found 1 error.
```
