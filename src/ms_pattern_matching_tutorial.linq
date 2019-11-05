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

namespace toll_calculator {
public class TollCalculator {
  public decimal CalculateToll(object vehicle) =>
    vehicle switch {
      Car c => c.Passengers switch {
        0 => 2.00m + 0.5m,
        2 => 2.0m - 0.5m,
        _ => 2.00m - 1.0m
      },

      Taxi t => t.Fares switch {
        1 => 3.50m,
        2 => 3.50m - 0.50m,
        _ => 3.50m - 1.00m
      },

      Bus b when
        ((double)b.Riders / (double)b.Capacity) <
        0.50                     => 5.00m + 2.00m,
      Bus b when
        ((double)b.Riders / (double)b.Capacity) >
        0.90                     => 5.00m - 1.00m,
      Bus b                      => 5.00m,

      DeliveryTruck t when
        (t.GrossWeightClass > 5000) =>
          10.00m + 5.00m,
      DeliveryTruck t when
        (t.GrossWeightClass < 3000) =>
          10.00m - 2.00m,
      DeliveryTruck t => 10.00m,

      { } => throw new ArgumentException(
               message: "Unknown vehicle type",
               paramName: nameof(vehicle)),
      null => throw new ArgumentNullException(
                nameof(vehicle))
    };

  public decimal PeakTimePremium(
    DateTime timeOfToll, bool inbound) =>
      (IsWeekDay(timeOfToll),
       GetTimeBand(timeOfToll), inbound) switch {
        (true, TimeBand.Overnight,   _)  => 0.75m,
        (true, TimeBand.Daytime,     _)  => 1.5m,
        (true, TimeBand.Morning, true)   => 2.0m,
        (true, TimeBand.Evening, false)  => 2.0m,
        (_,    _,                    _)  => 1.0m,
      };

  public decimal PeakTimePremiumFull(
      DateTime timeOfToll, bool inbound) =>
    (IsWeekDay(timeOfToll),
     GetTimeBand(timeOfToll), inbound) switch {
      (true,  TimeBand.Morning,   true)  => 2.00m,
      (true,  TimeBand.Morning,   false) => 1.00m,
      (true,  TimeBand.Daytime,   true)  => 1.50m,
      (true,  TimeBand.Daytime,   false) => 1.50m,
      (true,  TimeBand.Evening,   true)  => 1.00m,
      (true,  TimeBand.Evening,   false) => 2.00m,
      (true,  TimeBand.Overnight, true)  => 0.75m,
      (true,  TimeBand.Overnight, false) => 0.75m,
      (false, TimeBand.Morning,   true)  => 1.00m,
      (false, TimeBand.Morning,   false) => 1.00m,
      (false, TimeBand.Daytime,   true)  => 1.00m,
      (false, TimeBand.Daytime,   false) => 1.00m,
      (false, TimeBand.Evening,   true)  => 1.00m,
      (false, TimeBand.Evening,   false) => 1.00m,
      (false, TimeBand.Overnight, true)  => 1.00m,
      (false, TimeBand.Overnight, false) => 1.00m,
    };

  // <SnippetIsWeekDay>
  private static bool IsWeekDay(
    DateTime timeOfToll) =>
    timeOfToll.DayOfWeek switch {
      DayOfWeek.Saturday => false,
      DayOfWeek.Sunday   => false,
      _                  => true
    };
  // </SnippetIsWeekDay>

  // <SnippetGetTimeBand>
  private enum TimeBand {
    Morning,
    Daytime,
    Evening,
    Overnight
  }

  private static TimeBand GetTimeBand(
    DateTime timeOfToll) {
    int hour = timeOfToll.Hour;
    if (hour < 6)
        return TimeBand.Overnight;
    else if (hour < 10)
        return TimeBand.Morning;
    else if (hour < 16)
        return TimeBand.Daytime;
    else if (hour < 20)
        return TimeBand.Evening;
    else
        return TimeBand.Overnight;
  }
  // </SnippetGetTimeBand>

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
    var emptyTaxi = new Taxi();
    var singleFare = new Taxi { Fares = 1 };
    var doubleFare = new Taxi { Fares = 2 };
    var fullVanPool = new Taxi { Fares = 5 };
    var lowOccupantBus = new Bus { Capacity = 90, Riders = 15 };
    var normalBus = new Bus { Capacity = 90, Riders = 75 };
    var fullBus = new Bus { Capacity = 90, Riders = 85 };

    var heavyTruck = new DeliveryTruck { GrossWeightClass = 7500 };
    var truck = new DeliveryTruck { GrossWeightClass = 4000 };
    var lightTruck = new DeliveryTruck { GrossWeightClass = 2500 };

    Console.WriteLine($"The toll for a solo driver is {tollCalc.CalculateToll(soloDriver)}");
    Console.WriteLine($"The toll for a two ride share is {tollCalc.CalculateToll(twoRideShr)}");
    Console.WriteLine($"The toll for a three ride share is {tollCalc.CalculateToll(threeRideShr)}");
    Console.WriteLine($"The toll for a fullVan is {tollCalc.CalculateToll(fullVan)}");

    Console.WriteLine($"The toll for an empty taxi is {tollCalc.CalculateToll(emptyTaxi)}");
    Console.WriteLine($"The toll for a single fare taxi is {tollCalc.CalculateToll(singleFare)}");
    Console.WriteLine($"The toll for a double fare taxi is {tollCalc.CalculateToll(doubleFare)}");
    Console.WriteLine($"The toll for a full van taxi is {tollCalc.CalculateToll(fullVanPool)}");

    Console.WriteLine($"The toll for a low-occupant bus is {tollCalc.CalculateToll(lowOccupantBus)}");
    Console.WriteLine($"The toll for a regular bus is {tollCalc.CalculateToll(normalBus)}");
    Console.WriteLine($"The toll for a bus is {tollCalc.CalculateToll(fullBus)}");

    Console.WriteLine($"The toll for a truck is {tollCalc.CalculateToll(heavyTruck)}");
    Console.WriteLine($"The toll for a truck is {tollCalc.CalculateToll(truck)}");
    Console.WriteLine($"The toll for a truck is {tollCalc.CalculateToll(lightTruck)}");

    try
    {
        tollCalc.CalculateToll("this will fail");
    }
    catch (ArgumentException)
    {
        Console.WriteLine("Caught an argument exception when using the wrong type");
    }
    try
    {
        tollCalc.CalculateToll(null);
    }
    catch (ArgumentNullException)
    {
        Console.WriteLine("Caught an argument exception when using null");
    }

    Console.WriteLine("Testing the time premiums");

    var testTimes = new DateTime[]
    {
        new DateTime(2019, 3, 4, 8, 0, 0), // morning rush
        new DateTime(2019, 3, 6, 11, 30, 0), // daytime
        new DateTime(2019, 3, 7, 17, 15, 0), // evening rush
        new DateTime(2019, 3, 14, 03, 30, 0), // overnight

        new DateTime(2019, 3, 16, 8, 30, 0), // weekend morning rush
        new DateTime(2019, 3, 17, 14, 30, 0), // weekend daytime
        new DateTime(2019, 3, 17, 18, 05, 0), // weekend evening rush
        new DateTime(2019, 3, 16, 01, 30, 0), // weekend overnight
    };

    foreach (var time in testTimes)
    {
        Console.WriteLine($"Inbound premium at {time} is {tollCalc.PeakTimePremiumFull(time, true)}");
        Console.WriteLine($"Outbound premium at {time} is {tollCalc.PeakTimePremiumFull(time, false)}");
    }
    Console.WriteLine("====================================================");
    foreach (var time in testTimes)
    {
        Console.WriteLine($"Inbound premium at {time} is {tollCalc.PeakTimePremium(time, true)}");
        Console.WriteLine($"Outbound premium at {time} is {tollCalc.PeakTimePremium(time, false)}");
    }
  }
}
}

namespace ConsumerVehicleRegistration
{
    public class Car
    {
        public int Passengers { get; set; }
    }
}

namespace CommercialRegistration
{
    public class DeliveryTruck
    {
        public int GrossWeightClass { get; set; }
    }
}

namespace LiveryRegistration
{
    public class Taxi
    {
        public int Fares { get; set; }
    }

    public class Bus
    {
        public int Capacity { get; set; }
        public int Riders { get; set; }
    }
}
