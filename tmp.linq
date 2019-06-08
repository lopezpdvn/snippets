<Query Kind="Program">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
static class StringExtension {
  // This is called an extension method
  internal static int WordCount(this string str) =>
    str.Split(new[]{' '}).Length;
}

void Main() { 
  var s = "How many words are in this sentence?";
  $"Word count of s is {s.WordCount()}".Dump();
}