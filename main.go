package main

import "fmt"

func main() {
    fmt.Println("Starting Go application...")
    
    data := []int{1, 2, 3, 4, 5}
    for _, item := range data {
        fmt.Printf("Processing item: %d\n", item)
        result := processData(item)
        fmt.Printf("Item processed: %d\n", result)
    }
    
    fmt.Println("Application completed!")
}

func processData(data int) int {
    fmt.Printf("Processing data: %d\n", data)
    return data * 2
}

func calculateSum(a, b int) int {
    return a + b
}
