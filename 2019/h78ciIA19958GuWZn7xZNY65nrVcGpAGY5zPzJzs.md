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
  fly    : () => null,
  layEggs: () => null
});

const move = (pet: Fish | Bird) => {
  if ('swim' in pet) {  // pet : Fish | Bird
    return pet.swim();  // pet : Fish
  }
  return pet.fly();     // pet : Bird
}

})();
{% endhighlight %}
