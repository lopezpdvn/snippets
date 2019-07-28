<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
int[] x  = { 1, 2, 3, 4 };
int[] x_ = { 4, 3, 2, 1 };
int[] y  = x.Reverse().ToArray();

$"x  = {string.Join(", ", x) }".Dump();
$"x_ = {string.Join(", ", x_)}".Dump();
$"y  = {string.Join(", ", y) }".Dump();
