<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////

var cardNum = "8675743651456344";

var last4 =
  string.Join(string.Empty, cardNum.TakeLast(4));
  
last4.Dump();

// 6344