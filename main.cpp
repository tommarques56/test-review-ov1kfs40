#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <chrono>

class FastProcessor {
private:
    std::vector<int> data;
    
public:
    FastProcessor(const std::vector<int>& input) : data(input) {}
    
    // Optimized data processing
    std::vector<int> processData() const {
        std::vector<int> result = data;
        
        // Use STL algorithms for better performance
        std::transform(result.begin(), result.end(), result.begin(),
                      [](int x) { return x * 2; });
        
        return result;
    }
    
    // Fast sorting
    void sortData() {
        std::sort(data.begin(), data.end());
    }
    
    // Efficient search
    bool contains(int value) const {
        return std::binary_search(data.begin(), data.end(), value);
    }
};

// Move semantics for better performance
std::vector<int> createLargeDataset(size_t size) {
    std::vector<int> data;
    data.reserve(size);  // Reserve memory upfront
    
    for (size_t i = 0; i < size; ++i) {
        data.emplace_back(i * 2);
    }
    
    return data;  // Move semantics
}

int main() {
    std::cout << "Starting optimized C++ application..." << std::endl;
    
    auto start = std::chrono::high_resolution_clock::now();
    
    // Create large dataset
    auto data = createLargeDataset(1000000);
    
    // Process data
    FastProcessor processor(std::move(data));
    processor.sortData();
    
    auto result = processor.processData();
    
    auto end = std::chrono::high_resolution_clock::now();
    auto duration = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);
    
    std::cout << "Processed " << result.size() << " items in " 
              << duration.count() << "ms" << std::endl;
    
    return 0;
}
