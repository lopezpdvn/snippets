<Query Kind="Statements">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
int[] grades = { 59, 82, 70, 56, 92, 98, 85 };

var lowerGrades0 =
  grades.OrderByDescending(g => g)
        .Skip(3);

foreach (int grade in lowerGrades0)
  grade.Dump();
  
string.Empty.Dump();

var lowerGrades1 =
  grades.OrderByDescending(g => g)
        .SkipWhile((e, i) => i < 3);

foreach (int grade in lowerGrades1)
  grade.Dump();