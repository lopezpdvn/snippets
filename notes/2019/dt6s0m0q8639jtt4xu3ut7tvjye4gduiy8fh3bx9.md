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

export const TOP_LEVEL_NUMBER = 55;
{% endhighlight %}

`module_1.ts`

{% highlight typescript %}
// Not selectively
export * from './module_0';
{% endhighlight %}

`tmp.ts`

{% highlight typescript %}
// Selectively
import { StrValidator, TOP_LEVEL_NUMBER }
from './module_1';

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements
  StrValidator {
  isAcceptable(s: string) {
    return s.length === 5 &&
           numberRegexp.test(s);
  }
}

console.log(TOP_LEVEL_NUMBER);
{% endhighlight %}
