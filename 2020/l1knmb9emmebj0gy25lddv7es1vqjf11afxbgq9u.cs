<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
var x = new[] {'a', 'b', 'a', 'b', 'a', 'c'};

// y is multiset/freq-counter in query syntax
var y =
  from e in x
  group e by e into g
  select (e: g.Key, count: g.Count());

foreach (var t in y)
  $"{t.e}: {t.count}".Dump();

// a: 3
// b: 2
// c: 1