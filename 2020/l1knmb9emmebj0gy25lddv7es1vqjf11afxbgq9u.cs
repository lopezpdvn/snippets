<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
var x = new[] {'a', 'b', 'a', 'b', 'a', 'c'};

// Let y be a frequency counter in query syntax
var y =
  from e in x
  group e by e into g
  select g;

foreach (var e in y) {
  var key = e.Key;
  var count = e.Count();
  $"{key}: {count}".Dump();
}

// a: 3
// b: 2
// c: 1