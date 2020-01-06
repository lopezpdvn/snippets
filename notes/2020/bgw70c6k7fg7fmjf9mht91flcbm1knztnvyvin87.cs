<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
// Description of operattion:
// Deconstruct tuple x into 3 variables with
// types signatures.
var x = ("MTY", 1136000, 345.2);
(string city, int population, double area) = x;
  
foreach(var e in
  new object[]{city, population, area})
  e.Dump();

// MTY
// 1136000
// 345.2