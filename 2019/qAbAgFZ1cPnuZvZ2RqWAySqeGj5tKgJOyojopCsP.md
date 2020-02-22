---
layout: page
title: home
---

Implement the non-recursive portion in merge sort.

{% highlight java %}
public static void merge(
  int[] array, int[] helper,
  int low, int middle, int high) {
  for (int i = low; i <= high; i++)
    helper[i] = array[i];

  int hLeft = low;
  int hRight = middle + 1;
  int aIndex = low;

  while (hLeft <= middle && hRight <= high) {
    if (helper[hLeft] <= helper[hRight]) {
      array[aIndex] = helper[hLeft];
      hLeft++;
    } else {
      array[aIndex] = helper[hRight];
      hRight++;
    }
    aIndex++;
  }

  /* Copy the rest of the left side of the array
   * into the target array */
  int remaining = middle - hLeft;
  for (int i = 0; i <= remaining; i++)
    array[aIndex + i] = helper[hLeft + i];
}
{% endhighlight %}
