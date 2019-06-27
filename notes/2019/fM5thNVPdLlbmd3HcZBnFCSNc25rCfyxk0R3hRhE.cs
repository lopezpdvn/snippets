<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
int[] numbers = { 10, 10, 11, 11 };
var result = numbers.Average();
result.GetType().FullName.Dump();
result.Dump();