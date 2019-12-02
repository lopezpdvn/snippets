---
layout: page
title: Note
permalink: /note/
---

{% highlight csharp %}
namespace toll_calculator {
public class TollCalculator{
  // Rewrite CalcToll1 with 1 switch keyword only
  public decimal CalcToll0(object vehicle) =>
    vehicle switch  {
      Car { Passengers: 0 } => 2.0m + 0.50m,
      Car { Passengers: 1 } => 2.0m,
      Car { Passengers: 2 } => 2.0m - 0.50m,
      Car c                 => 2.00m - 1.0m,
      { } => throw new ArgumentException(
             message: "Unknown vehicle type"),
      null => throw new ArgumentNullException()
    };
  // Rewrite CalcToll0 without property pattern
  public decimal CalcToll1(object vehicle) =>
    vehicle switch {
      Car c => c.Passengers switch {
        0 => 2.0m + 0.50m,
        1 => 2.0m,
        2 => 2.0m - 0.50m,
        _ => 2.00m - 1.0m
      },
      { } => throw new ArgumentException(
             message: "Unknown vehicle type"),
      null => throw new ArgumentNullException()
    };
}}
{% endhighlight %}
