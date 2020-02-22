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
  fly:     () => null,
  layEggs: () => null
});

const pet = getSmallPet();

if (pet.swim) {
  pet.swim();
}
else if (pet.fly) {
  pet.fly();
}

})();
{% endhighlight %}

Output

```
tsc
tmp.ts:13:9 - error TS2339: Property 'swim' does not exist on type 'Bird | Fish'.
  Property 'swim' does not exist on type 'Bird'.

13 if (pet.swim) {
           ~~~~

tmp.ts:14:7 - error TS2339: Property 'swim' does not exist on type 'Bird | Fish'.
  Property 'swim' does not exist on type 'Bird'.

14   pet.swim();
         ~~~~

tmp.ts:16:14 - error TS2339: Property 'fly' does not exist on type 'Bird | Fish'.
  Property 'fly' does not exist on type 'Fish'.

16 else if (pet.fly) {
                ~~~

tmp.ts:17:7 - error TS2339: Property 'fly' does not exist on type 'Bird | Fish'.
  Property 'fly' does not exist on type 'Fish'.

17   pet.fly();
         ~~~


Found 4 errors.
```
