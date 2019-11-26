<Query Kind="Program">
  <Output>DataGrids</Output>
  <Namespace>CommercialRegistration</Namespace>
  <Namespace>ConsumerVehicleRegistration</Namespace>
  <Namespace>LiveryRegistration</Namespace>
  <RemoveNamespace>System.Collections</RemoveNamespace>
  <RemoveNamespace>System.Collections.Generic</RemoveNamespace>
  <RemoveNamespace>System.Data</RemoveNamespace>
  <RemoveNamespace>System.Diagnostics</RemoveNamespace>
  <RemoveNamespace>System.IO</RemoveNamespace>
  <RemoveNamespace>System.Linq</RemoveNamespace>
  <RemoveNamespace>System.Linq.Expressions</RemoveNamespace>
  <RemoveNamespace>System.Reflection</RemoveNamespace>
  <RemoveNamespace>System.Text</RemoveNamespace>
  <RemoveNamespace>System.Text.RegularExpressions</RemoveNamespace>
  <RemoveNamespace>System.Threading</RemoveNamespace>
  <RemoveNamespace>System.Transactions</RemoveNamespace>
  <RemoveNamespace>System.Xml</RemoveNamespace>
  <RemoveNamespace>System.Xml.Linq</RemoveNamespace>
  <RemoveNamespace>System.Xml.XPath</RemoveNamespace>
</Query>

namespace toll_calculator
{
  public class TollCalculator
  {
    // The property pattern examines properties of the
    // object once the type has been determined.
    
    public decimal CalcToll(object vehicle) =>
      vehicle switch  // Match Car type only.
      {
        
        Car { Passengers: 0 } => 2.00m + 0.50m,
        
        Car { Passengers: 1 } => 2.0m,
        
        Car { Passengers: 2 } => 2.0m - 0.50m,
        
        Car c => 2.00m - 1.0m,
        
        { } => throw new ArgumentException(
               message: "Unknown vehicle type",
               paramName: nameof(vehicle)),
               
        null => throw new ArgumentNullException(
                nameof(vehicle))
      };
  }
}

namespace toll_calculator {
class Program {
  static void Main(string[] args) {
    var tollCalc = new TollCalculator();

    var soloDriver = new Car();
    var twoRideShr = new Car { Passengers = 1 };
    var threeRideShr = new Car { Passengers = 2 };
    var fullVan = new Car { Passengers = 5 };

    $"Toll 4 solo driver = {tollCalc.CalcToll(soloDriver)}".Dump();
    $"Toll 4 two ride share = {tollCalc.CalcToll(twoRideShr)}".Dump();
    $"Toll 4 three ride share = {tollCalc.CalcToll(threeRideShr)}".Dump();
    $"Toll 4 fullVan = {tollCalc.CalcToll(fullVan)}".Dump();

    try {
      tollCalc.CalcToll("this will fail");
    }
    catch (ArgumentException) {
      Console.WriteLine("Caught an argument exception when using the wrong type");
    }
    try {
      tollCalc.CalcToll(null);
    }
    catch (ArgumentNullException) {
      Console.WriteLine("Caught an argument exception when using null");
    }

  }
}
}

namespace ConsumerVehicleRegistration {
  public class Car {
    public int Passengers { get; set; }
  }
}

namespace CommercialRegistration {
  public class DeliveryTruck {
    public int GrossWeightClass { get; set; }
  }
}

namespace LiveryRegistration {
  public class Taxi {
    public int Fares { get; set; }
  }

  public class Bus {
    public int Capacity { get; set; }
    public int Riders { get; set; }
  }
}