<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////

HashSet<int> A, B;
A = B = new HashSet<int>() { 1, 2 };

// A × B = B × A
var q =
  (from a in A
   from b in B
   select new[] {a, b})
   .ToHashSet();

var p =
  (from b in B
   from a in A
   select new[] { b, a })
   .ToHashSet();
   
foreach (var i in p)
  $"({i[0]}, {i[1]})".Dump();