<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
var numbers = new List<int> { 1, 2 };
bool isEmpty = numbers.Any();
var _isEmpty = isEmpty ? "not " : string.Empty;
$"The list is {_isEmpty}empty.".Dump();