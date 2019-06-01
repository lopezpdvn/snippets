<Query Kind="Statements">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////

var fruits = new ArrayList()
         {"Mango","Orange","Apple",3.0,"Banana"};

var q = from word in fruits.OfType<string>()
        where word.ToLower().Contains("n")
        select word;

foreach(var w in q) w.Dump();

// The following strings contain 'n':
// Mango
// Orange
// Banana