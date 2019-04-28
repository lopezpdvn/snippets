---
layout: page
title: home
---

Promise based code version

{% highlight javascript %}
const getProcessedDataP = url =>
  downloadData(url) // returns promise
    .catch(e =>
      downloadFallbackData(url)) // returns promise
    .then(v =>
      processDataInWorker(v)); // returns promise
{% endhighlight %}

async/await based code

{% highlight javascript %}
const getProcessedData = async (url) => {
  let v;
  try {
    v = await downloadData(url);
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
{% endhighlight %}
