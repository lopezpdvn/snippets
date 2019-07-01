<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
var numbers = new[] { 6, 9, 3, 7, 5 };
var result = numbers.Min();
result.Dump();