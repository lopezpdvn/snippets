---
layout: page
title: Note
permalink: /note/
---

`module_0.ts`

{% highlight typescript %}
export interface StrValidator {
  isAcceptable(s: string): boolean;
}
{% endhighlight %}

`tmp.ts`

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

import { StrValidator } from "./module_0";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements
  StrValidator {
  isAcceptable(s: string) {
    return s.length === 5 &&
           numberRegexp.test(s);
  }
}

})();
{% endhighlight %}

Output

```
tsc
tmp.ts:3:1 - error TS1232: An import declaration
can only be used in a namespace or module.

3 import { StrValidator } from "./module_0";
  ~~~~~~
tmp.ts:3:30 - error TS2307: Cannot find module './module_0'.

3 import { StrValidator } from "./module_0";
                               ~~~~~~~~~~~~

tmp.ts:5:1 - error TS1184: Modifiers cannot appear here.

5 export const numberRegexp = /^[0-9]+$/;
  ~~~~~~

tmp.ts:7:1 - error TS1184: Modifiers cannot appear here.

7 export class ZipCodeValidator implements
  ~~~~~~


Found 4 errors.
```
