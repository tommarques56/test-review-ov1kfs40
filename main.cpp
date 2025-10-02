#include <iostream>
#include <string>
#include <vector>

class Processor {
private:
    std::string data;
    
public:
    Processor(const std::string& input) : data(input) {}
    
    std::string processData() {
        std::string result = data;
        for (auto& c : result) {
            c = std::toupper(c);
        }
        return result;
    }
    
    int calculateSum(int a, int b) {
        return a + b;
    }
};

int main() {
    std::cout << "Starting C++ application..." << std::endl;
    
    Processor processor("Hello World");
    std::string result = processor.processData();
    std::cout << "Processed: " << result << std::endl;
    
    return 0;
}
