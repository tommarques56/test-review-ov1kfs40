using System;
using System.Collections.Generic;

namespace TestApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting C# application...");
            
            var data = new List<int> { 1, 2, 3, 4, 5 };
            foreach (var item in data)
            {
                Console.WriteLine($"Processing item: {item}");
                var result = ProcessData(item);
                Console.WriteLine($"Item processed: {result}");
            }
            
            Console.WriteLine("Application completed!");
        }
        
        static int ProcessData(int data)
        {
            Console.WriteLine($"Processing data: {data}");
            return data * 2;
        }
        
        static int CalculateSum(int a, int b)
        {
            return a + b;
        }
    }
}
