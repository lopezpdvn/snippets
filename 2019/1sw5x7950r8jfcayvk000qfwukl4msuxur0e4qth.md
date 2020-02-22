---
layout: page
title: Note
permalink: /note/
---

{% highlight typescript %}
const propRet =
  <T, K extends keyof T>
    (obj: T, key: K): T[K] =>
      obj[key];

const xSym = Symbol();
const todo = {
  id    : 1                     ,
  text  : 'Buy milk'            ,
  due   : new Date(2016, 11, 31),
  [xSym]: false
};

const id   : number  = propRet(todo, 'id')  ;
const text : string  = propRet(todo, 'text');
const due  : Date    = propRet(todo, 'due') ;
const _xSym: boolean = propRet(todo, xSym);
const e:
  number | string | Date | boolean =
  propRet(todo, 'dueDate');
{% endhighlight %}

Output

```
tsc
tmp.ts:22:17 - error TS2345: Argument of type '"dueDate"'
is not assignable to parameter of type
'"text" | unique symbol | "id" | "due"'.

22   propRet(todo, 'dueDate');
                   ~~~~~~~~~
Found 1 error.
```
