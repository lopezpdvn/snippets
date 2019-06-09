<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
int[] A = {1, 2, 3}, B = {3, 4, 5};

// C = A ∪ B
var C = A.Union(B);
foreach(var i in C) i.Dump();