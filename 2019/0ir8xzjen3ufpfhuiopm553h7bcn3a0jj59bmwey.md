---
layout: page
title: Note
permalink: /note/
---

`module_0.ts`

{% highlight typescript %}
export interface StringValidator {
  isAcceptable(s: string): boolean;
}
{% endhighlight %}

`tmp.ts`

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

import { StringValidator } from './module_0';

})();
{% endhighlight %}

Output

```
 tsc
tmp.ts:3:1 - error TS1232: An import declaration
  can only be used in a namespace or module.

3 import { StringValidator } from './module_0';
  ~~~~~~

Found 1 error.
```
