<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

// Description of operation:
// Deconstruct tuple x into 3 variables with
// type inference.
//////////////////////////////////////////////////
var x = ("MTY", 1136000, 345.2);
var (city, population, area) = x;
  
foreach(var e in
  new object[] { city, population, area })
  $"{e,9} : ({e.GetType().FullName})".Dump();

//       MTY : (System.String)
//   1136000 : (System.Int32)
//     345.2 : (System.Double)