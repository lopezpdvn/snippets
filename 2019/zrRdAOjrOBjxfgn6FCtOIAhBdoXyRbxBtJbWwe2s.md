---
layout: page
title: home
---

{% highlight typescript %}
'use strict'; const log =console.log; (async ()=>{

class Employee {
  constructor(
    public name: string,
    public salary: number){}
}

type EmployeePredicate =
  (e: Employee) => boolean;

})();
{% endhighlight %}

Let `EmployeePredicate` be the name of a type of a predicate/test of an
`Employee`; a function that takes an `Employee` and returns a `boolean`.
