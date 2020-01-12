<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
var x = new[] {'a', 'a', 'a', 'b', 'b', 'c'};

// Let y be a frequency counter.
var y =
  x.ToLookup(
    x => x,
    x => x);

foreach (var e in y) {
  var key = e.Key;
  var count = e.Count();
  $"{key}: {count}".Dump();
}

// a: 3
// b: 2
// c: 1