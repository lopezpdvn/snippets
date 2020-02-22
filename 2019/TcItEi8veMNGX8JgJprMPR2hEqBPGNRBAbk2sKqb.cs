<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
var input = "201";
// bool TryParse (string s, out int result)
if(int.TryParse(input, out var result))
  result.Dump();
else
  "Unable to parse".Dump();