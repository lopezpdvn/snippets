<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
var x = new[] {'a', 'b', 'a', 'b', 'a', 'c'};

// y is multiset/freq-counter in query syntax
IEnumerable<(char e, int count)> y =
  from e in x
  group e by e into g
  select (g.Key, g.Count());

foreach (var t in y)
  $"{t.e}: {t.count}".Dump();

// a: 3
// b: 2
// c: 1