---
layout: page
title: Note
permalink: /note/
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

interface Bird { layEggs(); fly();  }
interface Fish { layEggs(); swim(); }

const getSmallPet = () : Fish | Bird => ({
  fly: () => null,     layEggs: () => null     });

// `pet is Fish` is a type predicate.
// Any time isFish is called with some variable,
// TS will narrow that variable to that specific
// type if the original type is compatible.
const isFish = (pet: Fish | Bird): pet is Fish =>
  (pet as Fish).swim !== undefined;

const pet = getSmallPet();
if (isFish(pet)) {
  pet.swim();  // pet : Fish
}
else {
  pet.fly();   // pet : Bird
}
  
})();
{% endhighlight %}

Output

```
tsc
<compiles OK>
```
