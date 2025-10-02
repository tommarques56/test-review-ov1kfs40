#include <iostream>
#include <string>
#include <vector>
#include <memory>
#include <stdexcept>

/**
 * @brief A high-quality processor class with proper encapsulation
 */
class QualityProcessor {
private:
    std::string m_data;
    std::vector<int> m_numbers;
    
public:
    /**
     * @brief Constructor with input validation
     * @param data Input string data
     * @param numbers Input numbers vector
     * @throws std::invalid_argument if inputs are invalid
     */
    QualityProcessor(const std::string& data, const std::vector<int>& numbers)
        : m_data(data), m_numbers(numbers) {
        if (data.empty()) {
            throw std::invalid_argument("Data cannot be empty");
        }
        if (numbers.empty()) {
            throw std::invalid_argument("Numbers vector cannot be empty");
        }
    }
    
    /**
     * @brief Process the data safely
     * @return Processed string
     * @throws std::runtime_error if processing fails
     */
    std::string processData() const {
        try {
            std::string result = m_data;
            
            // Safe string processing
            for (auto& c : result) {
                c = std::toupper(c);
            }
            
            return result;
        } catch (const std::exception& e) {
            throw std::runtime_error("Failed to process data: " + std::string(e.what()));
        }
    }
    
    /**
     * @brief Calculate sum of numbers with validation
     * @return Sum of all numbers
     * @throws std::overflow_error if sum overflows
     */
    long long calculateSum() const {
        long long sum = 0;
        
        for (int num : m_numbers) {
            if (sum > LLONG_MAX - num) {
                throw std::overflow_error("Sum would overflow");
            }
            sum += num;
        }
        
        return sum;
    }
    
    /**
     * @brief Get data size
     * @return Size of data string
     */
    size_t getDataSize() const noexcept {
        return m_data.size();
    }
    
    /**
     * @brief Get numbers count
     * @return Count of numbers
     */
    size_t getNumbersCount() const noexcept {
        return m_numbers.size();
    }
};

/**
 * @brief Create a processor with proper error handling
 * @param data Input data
 * @param numbers Input numbers
 * @return Unique pointer to processor
 * @throws std::invalid_argument if creation fails
 */
std::unique_ptr<QualityProcessor> createProcessor(
    const std::string& data, 
    const std::vector<int>& numbers) {
    
    if (data.length() > 1000) {
        throw std::invalid_argument("Data too long");
    }
    
    return std::make_unique<QualityProcessor>(data, numbers);
}

/**
 * @brief Main function with comprehensive error handling
 * @return Exit status
 */
int main() {
    try {
        std::cout << "Starting high-quality C++ application..." << std::endl;
        
        // Create processor with validation
        std::vector<int> numbers = {1, 2, 3, 4, 5};
        auto processor = createProcessor("Hello World", numbers);
        
        // Process data
        std::string result = processor->processData();
        std::cout << "Processed: " << result << std::endl;
        
        // Calculate sum
        long long sum = processor->calculateSum();
        std::cout << "Sum: " << sum << std::endl;
        
        // Display statistics
        std::cout << "Data size: " << processor->getDataSize() << std::endl;
        std::cout << "Numbers count: " << processor->getNumbersCount() << std::endl;
        
        std::cout << "Application completed successfully!" << std::endl;
        
    } catch (const std::invalid_argument& e) {
        std::cerr << "Invalid argument: " << e.what() << std::endl;
        return 1;
    } catch (const std::runtime_error& e) {
        std::cerr << "Runtime error: " << e.what() << std::endl;
        return 1;
    } catch (const std::exception& e) {
        std::cerr << "Unexpected error: " << e.what() << std::endl;
        return 1;
    }
    
    return 0;
}
