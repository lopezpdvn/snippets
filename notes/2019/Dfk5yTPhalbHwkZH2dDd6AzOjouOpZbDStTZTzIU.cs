<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
var A = new HashSet<int>{ 1, 2, 3 };
var B = new HashSet<int>{ 3, 4, 5 };

// C = A ∩ B
var C = A.Intersect(B);
foreach (var i in C.OrderBy(e => e))
  i.Dump();
