<Query Kind="Program">
  <Output>DataGrids</Output>
</Query>

//////////////////////////////////////////////////
void Main() =>
  new Employee(100, 52)
    .Salary.Dump();

public class Employee {
  public readonly int Salary;

  private Employee(int annualSalary) =>
    Salary = annualSalary;

  public Employee(int weeklySalary, int weeks) :
    this(weeklySalary * weeks) {}
}

// 5200