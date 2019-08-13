---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

// This kind of type is Numeric Literal Types
type DiceResult =  1 | 2 | 3 | 4 | 5 | 6;

const rollDice = () : DiceResult => 0;

log(rollDice());

})();
{% endhighlight %}

Output

```
tsc
tmp.ts:6:37 - error TS2322: Type '0' is not assignable to type 'DiceResult'.

6 const rollDice = () : DiceResult => 0;
                                      ~


Found 1 error.
```
