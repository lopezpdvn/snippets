<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

var x = new[] { 4, 1, 2, 2, 3, 1, 4, 2 };
x
.Aggregate(new HashSet<int>(),
           (s, i) => { s.Add(i); return s; })
.OrderBy(i => i)
.Dump();
//1
//2
//3
//4