/**
 * Secure JavaScript application with proper validation
 */

// Secure configuration
const config = {
    maxInputLength: 1000,
    allowedChars: /^[a-zA-Z0-9\s\-_]+$/,
    timeout: 5000
};

/**
 * Safely process user input
 * @param {string} input - User input to process
 * @returns {string} - Processed input
 * @throws {Error} - If input is invalid
 */
function processInput(input) {
    if (!input || typeof input !== 'string') {
        throw new Error('Input must be a non-empty string');
    }
    
    if (input.length > config.maxInputLength) {
        throw new Error('Input too long');
    }
    
    if (!config.allowedChars.test(input)) {
        throw new Error('Input contains invalid characters');
    }
    
    return input.trim().toUpperCase();
}

/**
 * Safely evaluate mathematical expressions
 * @param {string} expression - Mathematical expression
 * @returns {number} - Result of evaluation
 * @throws {Error} - If expression is invalid
 */
function safeEval(expression) {
    if (!expression || typeof expression !== 'string') {
        throw new Error('Expression must be a string');
    }
    
    // Only allow numbers, operators, and parentheses
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        throw new Error('Invalid characters in expression');
    }
    
    try {
        // Use Function constructor instead of eval
        return new Function('return ' + expression)();
    } catch (error) {
        throw new Error('Invalid mathematical expression');
    }
}

/**
 * Secure data processing with timeout
 * @param {Array} data - Data to process
 * @returns {Promise<Array>} - Processed data
 */
async function processData(data) {
    if (!Array.isArray(data)) {
        throw new Error('Data must be an array');
    }
    
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error('Processing timeout'));
        }, config.timeout);
        
        try {
            const result = data.map(item => {
                if (typeof item !== 'number') {
                    throw new Error('All items must be numbers');
                }
                return item * 2;
            });
            
            clearTimeout(timeout);
            resolve(result);
        } catch (error) {
            clearTimeout(timeout);
            reject(error);
        }
    });
}

/**
 * Main application function
 */
async function main() {
    try {
        console.log('Starting secure JavaScript application...');
        
        // Test input processing
        const input = 'Hello World';
        const processed = processInput(input);
        console.log('Processed input:', processed);
        
        // Test safe evaluation
        const expression = '2 + 3 * 4';
        const result = safeEval(expression);
        console.log('Expression result:', result);
        
        // Test data processing
        const data = [1, 2, 3, 4, 5];
        const processedData = await processData(data);
        console.log('Processed data:', processedData);
        
        console.log('Application completed successfully!');
        
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

// Run the application
if (require.main === module) {
    main();
}

module.exports = {
    processInput,
    safeEval,
    processData
};
