<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
var x = new[] { 1, 2, 3, 4};

// Argument is single element.
var y = x.Prepend(-1);

foreach (var e in new[] { x, y })
  $"({string.Join(", ", e)})".Dump();

// (1, 2, 3, 4)
// (-1, 1, 2, 3, 4)