<Query Kind="Program">
  <Output>DataGrids</Output>
  <Namespace>System</Namespace>
  <Namespace>System.Linq</Namespace>
  <Namespace>System.Text</Namespace>
</Query>

//////////////////////////////////////////////////
public class Student
{
  public string First { get; set; }
  public string Last { get; set; }
  public int ID { get; set; }
}

static void Main(string[] args)
{
  var students = new List<Student> {
    new Student {First="Svetlana",
      Last="Omelchenko", ID=111},
    new Student {First="Svetlana",
      Last="Omelchenko", ID=116},
    new Student {First="Claire",
      Last="O'Donnell", ID=112},
    new Student {First="Sven",
      Last="Mortensen", ID=113},
    new Student {First="Cesar",
      Last="Garcia", ID=114},
    new Student {First="Debra",
      Last="Garcia", ID=115}
  };

  var sortedStudents =
    from student in students
    orderby student.Last,
            student.First descending,
            student.ID
    select student;

  $"{"Last",-10}, {"First",-8}, ID".Dump();
  foreach (var x in sortedStudents)
    $"{x.Last,-10}, {x.First,-8}, {x.ID}".Dump();
    //x.Dump();
}