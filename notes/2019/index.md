---
layout: page
title: home
---

Explain

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  return {
    fly: () => null,
    layEggs: () => null
  };
}

// pet :: Fish | Bird
const pet = getSmallPet();
pet.layEggs();
pet.fly();
  
})();
{% endhighlight %}

Last line is a compilation error.

```
tsc
tmp.ts:22:5 - error TS2339: Property 'fly' does not exist on type 'Bird | Fish'.
  Property 'fly' does not exist on type 'Fish'.

22 pet.fly();    // errors
      ~~~


Found 1 error.
```
