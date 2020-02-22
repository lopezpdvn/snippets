---
layout: page
title: home
---

{% highlight csharp %}
void Main() { A0(); }
class Package {
  public string Company { get; set; }
  public double Weight { get; set; }
  public long TrackNum { get; set; }
}

public static void A0() {
  var packages = new List<Package> {
    new Package { Company = "Coho Vineyard",
      Weight = 25.2, TrackNum = 8945 },
    new Package { Company = "Lucerne Pub.",
      Weight = 18.7, TrackNum = 8911 },
    new Package { Company = "Wingtip Toys",
      Weight = 6.0, TrackNum = 2994 },
    new Package { Company = "Contoso Pharma",
      Weight = 9.3, TrackNum = 6700 },
    new Package { Company = "Wide World",
      Weight = 33.8, TrackNum = 4665 } };
  $"|packages| = {packages.Count()}\n".Dump();

  // q :: ILookup<char, anonymous type>
  // p :: Package
  var q =
    packages.ToLookup(
      p => p.Company?.FirstOrDefault(),
      p => new { p.Company, p.TrackNum});

  // x :: IGrouping<char, anonymous type>
  foreach (var x in q) {
    $"{x.Key}".Dump();
    // y :: anonymous type
    foreach (var y in x)
      $"  {y.Company} {y.TrackNum}, ".Dump();
  }
}
{% endhighlight %}

Output

```
|packages| = 5

C
  Coho Vineyard 8945,
  Contoso Pharma 6700,
L
  Lucerne Pub. 8911,
W
  Wingtip Toys 2994,
  Wide World 4665,
```
