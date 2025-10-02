#include <iostream>
#include <string>
#include <memory>
#include <vector>

class SecureProcessor {
private:
    std::string data;
    
public:
    SecureProcessor(const std::string& input) : data(input) {}
    
    // Safe string processing
    std::string processData() const {
        if (data.empty()) {
            throw std::invalid_argument("Input data cannot be empty");
        }
        
        std::string result = data;
        // Safe string operations
        for (auto& c : result) {
            c = std::toupper(c);
        }
        return result;
    }
    
    // Safe number calculation
    int calculateSum(int a, int b) const {
        if (a < 0 || b < 0) {
            throw std::invalid_argument("Numbers must be positive");
        }
        return a + b;
    }
};

// Safe memory management with smart pointers
std::unique_ptr<SecureProcessor> createProcessor(const std::string& input) {
    if (input.length() > 1000) {
        throw std::invalid_argument("Input too long");
    }
    return std::make_unique<SecureProcessor>(input);
}

int main() {
    try {
        std::cout << "Starting secure C++ application..." << std::endl;
        
        auto processor = createProcessor("Hello World");
        std::string result = processor->processData();
        std::cout << "Processed: " << result << std::endl;
        
        int sum = processor->calculateSum(5, 10);
        std::cout << "Sum: " << sum << std::endl;
        
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
        return 1;
    }
    
    return 0;
}
