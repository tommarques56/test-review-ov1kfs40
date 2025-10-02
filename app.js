/**
 * High-quality JavaScript application with comprehensive documentation
 * @fileoverview Main application module with proper error handling and validation
 * @author Code Review System
 * @version 1.0.0
 */

'use strict';

// JSDoc type definitions
/**
 * @typedef {Object} Config
 * @property {number} maxInputLength - Maximum allowed input length
 * @property {RegExp} allowedChars - Regex for allowed characters
 * @property {number} timeout - Processing timeout in milliseconds
 */

/**
 * @typedef {Object} ProcessResult
 * @property {boolean} success - Whether processing was successful
 * @property {*} data - Processed data
 * @property {string} [error] - Error message if processing failed
 */

// Configuration with proper validation
const config = Object.freeze({
    maxInputLength: 1000,
    allowedChars: /^[a-zA-Z0-9\s\-_]+$/,
    timeout: 5000,
    retryAttempts: 3
});

/**
 * Input validation utility class
 */
class InputValidator {
    /**
     * Validates string input
     * @param {string} input - Input to validate
     * @param {string} fieldName - Name of the field for error messages
     * @throws {TypeError} If input is not a string
     * @throws {RangeError} If input is too long or contains invalid characters
     */
    static validateString(input, fieldName = 'input') {
        if (typeof input !== 'string') {
            throw new TypeError(`${fieldName} must be a string`);
        }
        
        if (input.length === 0) {
            throw new RangeError(`${fieldName} cannot be empty`);
        }
        
        if (input.length > config.maxInputLength) {
            throw new RangeError(`${fieldName} is too long (max: ${config.maxInputLength})`);
        }
        
        if (!config.allowedChars.test(input)) {
            throw new RangeError(`${fieldName} contains invalid characters`);
        }
    }
    
    /**
     * Validates array input
     * @param {Array} input - Input to validate
     * @param {string} fieldName - Name of the field for error messages
     * @throws {TypeError} If input is not an array
     * @throws {RangeError} If array is empty
     */
    static validateArray(input, fieldName = 'array') {
        if (!Array.isArray(input)) {
            throw new TypeError(`${fieldName} must be an array`);
        }
        
        if (input.length === 0) {
            throw new RangeError(`${fieldName} cannot be empty`);
        }
    }
}

/**
 * High-quality data processor with comprehensive error handling
 */
class QualityDataProcessor {
    /**
     * Creates a new QualityDataProcessor instance
     * @param {Config} [processorConfig] - Optional configuration
     */
    constructor(processorConfig = {}) {
        this.config = Object.freeze({ ...config, ...processorConfig });
        this.processedCount = 0;
    }
    
    /**
     * Processes string input with validation and error handling
     * @param {string} input - Input string to process
     * @returns {ProcessResult} Processing result
     */
    processString(input) {
        try {
            InputValidator.validateString(input, 'input');
            
            const processed = input.trim().toUpperCase();
            this.processedCount++;
            
            return {
                success: true,
                data: processed
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                error: error.message
            };
        }
    }
    
    /**
     * Processes array data with validation and error handling
     * @param {Array<number>} data - Array of numbers to process
     * @returns {ProcessResult} Processing result
     */
    processArray(data) {
        try {
            InputValidator.validateArray(data, 'data');
            
            // Validate all elements are numbers
            for (let i = 0; i < data.length; i++) {
                if (typeof data[i] !== 'number' || isNaN(data[i])) {
                    throw new TypeError(`Element at index ${i} is not a valid number`);
                }
            }
            
            const processed = data.map(item => item * 2);
            this.processedCount++;
            
            return {
                success: true,
                data: processed
            };
        } catch (error) {
            return {
                success: false,
                data: null,
                error: error.message
            };
        }
    }
    
    /**
     * Gets the total number of processed items
     * @returns {number} Number of processed items
     */
    getProcessedCount() {
        return this.processedCount;
    }
    
    /**
     * Resets the processed count
     */
    resetCount() {
        this.processedCount = 0;
    }
}

/**
 * Main application class with proper error handling
 */
class QualityApplication {
    /**
     * Creates a new QualityApplication instance
     */
    constructor() {
        this.processor = new QualityDataProcessor();
        this.isRunning = false;
    }
    
    /**
     * Starts the application
     * @returns {Promise<void>} Promise that resolves when application starts
     */
    async start() {
        if (this.isRunning) {
            throw new Error('Application is already running');
        }
        
        this.isRunning = true;
        console.log('Starting high-quality JavaScript application...');
    }
    
    /**
     * Stops the application
     * @returns {Promise<void>} Promise that resolves when application stops
     */
    async stop() {
        if (!this.isRunning) {
            throw new Error('Application is not running');
        }
        
        this.isRunning = false;
        console.log('Application stopped');
    }
    
    /**
     * Runs the main application logic
     * @returns {Promise<void>} Promise that resolves when application completes
     */
    async run() {
        if (!this.isRunning) {
            throw new Error('Application must be started first');
        }
        
        try {
            // Test string processing
            const stringResult = this.processor.processString('Hello World');
            if (stringResult.success) {
                console.log('String processed:', stringResult.data);
            } else {
                console.error('String processing failed:', stringResult.error);
            }
            
            // Test array processing
            const arrayResult = this.processor.processArray([1, 2, 3, 4, 5]);
            if (arrayResult.success) {
                console.log('Array processed:', arrayResult.data);
            } else {
                console.error('Array processing failed:', arrayResult.error);
            }
            
            // Display statistics
            console.log(`Total processed items: ${this.processor.getProcessedCount()}`);
            console.log('Application completed successfully!');
            
        } catch (error) {
            console.error('Application error:', error.message);
            throw error;
        }
    }
}

/**
 * Main function with comprehensive error handling
 * @returns {Promise<void>} Promise that resolves when application completes
 */
async function main() {
    const app = new QualityApplication();
    
    try {
        await app.start();
        await app.run();
    } catch (error) {
        console.error('Fatal error:', error.message);
        process.exit(1);
    } finally {
        try {
            await app.stop();
        } catch (error) {
            console.error('Error stopping application:', error.message);
        }
    }
}

// Run the application if this file is executed directly
if (require.main === module) {
    main().catch(error => {
        console.error('Unhandled error:', error);
        process.exit(1);
    });
}

// Export classes and functions for testing
module.exports = {
    InputValidator,
    QualityDataProcessor,
    QualityApplication,
    main
};
