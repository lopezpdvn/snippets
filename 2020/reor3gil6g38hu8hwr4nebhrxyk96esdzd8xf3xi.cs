<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
// format datetime to string
var x = DateTime.Now;
x.Dump();
x.ToString("MMddyy").Dump();

// 5 / 21 / 2020 1:37:07 PM
// 052120