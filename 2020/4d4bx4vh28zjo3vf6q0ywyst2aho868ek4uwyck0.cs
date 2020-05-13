<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
var x = new[] { 'a', 'a', 'a', 'b', 'b', 'c' };
// order of elements in array does not matter

// Let y be a frequency counter.
var y =
  x.ToLookup(x => x)
   .Select  (x => (x.Key, Count: x.Count()));

foreach (var e in y)
  $"{e.Key}: {e.Count}".Dump();

// a: 3
// b: 2
// c: 1
