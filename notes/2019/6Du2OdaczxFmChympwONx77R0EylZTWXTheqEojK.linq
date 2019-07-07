<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
var A = new HashSet<int>{ 1, 2, 3, 4 };
var B = new HashSet<int>{ 1, 3 };

// C = A \ B
IEnumerable<int> C = A.Except(B);
foreach (var i in C.OrderBy(c => c))
  i.Dump();
