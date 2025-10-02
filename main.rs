fn main() {
    println!("Starting Rust application...");
    
    let data = vec![1, 2, 3, 4, 5];
    for item in data {
        println!("Processing item: {}", item);
        let result = process_data(item);
        println!("Item processed: {}", result);
    }
    
    println!("Application completed!");
}

fn process_data(data: i32) -> i32 {
    println!("Processing data: {}", data);
    data * 2
}

fn calculate_sum(a: i32, b: i32) -> i32 {
    a + b
}
