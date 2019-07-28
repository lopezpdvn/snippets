---
layout: page
title: home
---

Is `root` an ancestor of `p`?

{% highlight java %}
public static boolean covers(
                  TreeNode root, TreeNode p) {
  if (root == null) return false;
  if (root == p) return true;
  return covers(root.left, p) ||
         covers(root.right, p); 
}
{% endhighlight %}
