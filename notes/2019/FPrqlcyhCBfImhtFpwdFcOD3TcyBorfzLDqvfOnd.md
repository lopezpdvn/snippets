---
layout: page
title: home
---

We have a **StringArray** interface that has an index signature. This index
signature states that when a **StringArray** is indexed with a **number**, it
will return a **string**.

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

interface StringArray {
  [index: number]: string;
}

const myArray: StringArray = ["Bob", "Fred"];

const myStr: string = myArray[0];

})();
{% endhighlight %}
