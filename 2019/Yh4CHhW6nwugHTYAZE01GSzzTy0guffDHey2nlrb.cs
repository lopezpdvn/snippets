<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
int[] numbers = { 1, 3, 5, 7, 9 };
var result = numbers.Contains(5);
result.Dump();