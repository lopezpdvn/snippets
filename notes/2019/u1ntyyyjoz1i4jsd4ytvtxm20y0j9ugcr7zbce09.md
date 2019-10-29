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
import { StrValidator } from "./module_0";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements
  StrValidator {
  isAcceptable(s: string) {
    return s.length === 5 &&
           numberRegexp.test(s);
  }
}
{% endhighlight %}

Output

```
tsc
<compiles OK>
```
