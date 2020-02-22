<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
string[] sentences = {
  "A penny saved is a penny earned.",
  "The early bird catches the worm.",
  "The pen is mightier than the sword."
};

var q =
  from sentence in sentences
  let words = sentence.Split()
  from word in words
  let w = word.ToLower()
  where false
    || w[0] == 'a'
    || w[0] == 'e'
    || w[0] == 'i'
    || w[0] == 'o'
    || w[0] == 'u'
  select word;

foreach (string v in q)
  $"\"{v}\" starts with a vowel".Dump();
