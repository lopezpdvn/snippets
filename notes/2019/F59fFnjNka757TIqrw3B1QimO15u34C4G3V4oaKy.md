---
layout: page
title: home
---

{% highlight csharp %}
void Main() { Card(); }
class Pet {
  public string Name { get; set; }
  public int Age { get; set; }
}

public static void Card()
{
  var pets = new List<Pet> {
    new Pet { Name="Barley", Age=8 },
    new Pet { Name="Boots", Age=4 },
    new Pet { Name="Whiskers", Age=1 } };

  foreach (Pet pet in pets.DefaultIfEmpty()) {
    $"Name: {pet?.Name ?? "None"}".Dump();
  }

  string.Empty.Dump();
  var pets2 = new List<Pet>();
  foreach (Pet pet in pets2.DefaultIfEmpty()) {
    $"Name: {pet?.Name ?? "None"}".Dump();
  }
}

{% endhighlight %}

Output

```
Name: Barley
Name: Boots
Name: Whiskers

Name: None
```
