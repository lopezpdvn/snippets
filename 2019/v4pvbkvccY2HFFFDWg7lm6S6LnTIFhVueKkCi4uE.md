---
layout: page
title: home
---

Improve this program

{% highlight java %}
String joinWords(String[] words) {
  String sentence = "";
  for (String w: words) {
    sentence = sentence + w;
  }
  return sentence;
}
{% endhighlight %}

Use `StringBuilder`

{% highlight java %}
String joinWords(String[] words) {
  StringBuilder sentence = new StringBuilder();
  for (String w : words) {
    sentence.append(w);
  }
  return sentence.toString();
}
{% endhighlight %}
