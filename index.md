---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

const greetMe: (msg: string) => void;
greetMe = msg => log(msg);
greetMe("hello world");

})();
{% endhighlight %}

Output

```
tmp.ts:3:7 - error TS1155: 'const' declarations must be initialized.

3 const greetMe: (msg: string) => void;
        ~~~~~~~

tmp.ts:4:1 - error TS2588: Cannot assign to 'greetMe' because it is a constant.
4 greetMe = msg => log(msg);
  ~~~~~~~


Found 2 errors.
```
