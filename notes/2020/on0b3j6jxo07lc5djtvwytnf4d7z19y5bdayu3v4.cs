<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
var x = new[] {'a', 'a', 'a', 'b', 'b', 'c'};

// Let y be a frequency counter.
ILookup<char, char> y =
  x.ToLookup(
    x => x,
    x => x);

foreach (IGrouping<char, char> e in y) {
  char key = e.Key;
  int count = e.Count();
  $"{key}: {count}".Dump();
}

// a: 3
// b: 2
// c: 1