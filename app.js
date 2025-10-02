/**
 * High-performance JavaScript application
 */

// Performance-optimized configuration
const config = {
    batchSize: 1000,
    cacheSize: 100,
    maxWorkers: 4
};

// LRU Cache implementation
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return null;
    }
    
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}

// Global cache instance
const cache = new LRUCache(config.cacheSize);

/**
 * Optimized data processing with caching
 * @param {Array} data - Data to process
 * @returns {Array} - Processed data
 */
function processDataOptimized(data) {
    if (!Array.isArray(data)) {
        throw new Error('Data must be an array');
    }
    
    // Check cache first
    const cacheKey = JSON.stringify(data);
    const cached = cache.get(cacheKey);
    if (cached) {
        return cached;
    }
    
    // Process data in batches for better performance
    const result = [];
    for (let i = 0; i < data.length; i += config.batchSize) {
        const batch = data.slice(i, i + config.batchSize);
        const processedBatch = batch.map(item => item * 2);
        result.push(...processedBatch);
    }
    
    // Cache the result
    cache.set(cacheKey, result);
    return result;
}

/**
 * Fast sorting algorithm
 * @param {Array} arr - Array to sort
 * @returns {Array} - Sorted array
 */
function fastSort(arr) {
    if (arr.length <= 1) return arr;
    
    // Use native sort for better performance
    return arr.slice().sort((a, b) => a - b);
}

/**
 * Efficient search using binary search
 * @param {Array} arr - Sorted array
 * @param {number} target - Target value
 * @returns {number} - Index of target or -1 if not found
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

/**
 * Memory-efficient data processing
 * @param {Array} data - Large dataset
 * @returns {Generator} - Generator for processed data
 */
function* processLargeDataset(data) {
    for (let i = 0; i < data.length; i++) {
        yield data[i] * 2;
    }
}

/**
 * Main application function with performance monitoring
 */
function main() {
    console.log('Starting high-performance JavaScript application...');
    
    const startTime = performance.now();
    
    try {
        // Test with large dataset
        const largeData = Array.from({ length: 100000 }, (_, i) => i);
        
        // Process data
        const processed = processDataOptimized(largeData);
        console.log(`Processed ${processed.length} items`);
        
        // Test sorting
        const unsorted = [64, 34, 25, 12, 22, 11, 90];
        const sorted = fastSort(unsorted);
        console.log('Sorted array:', sorted);
        
        // Test binary search
        const searchResult = binarySearch(sorted, 25);
        console.log('Found 25 at index:', searchResult);
        
        // Test memory-efficient processing
        const largeDataset = Array.from({ length: 1000 }, (_, i) => i);
        let processedCount = 0;
        for (const item of processLargeDataset(largeDataset)) {
            processedCount++;
        }
        console.log(`Memory-efficient processing: ${processedCount} items`);
        
        const endTime = performance.now();
        console.log(`Execution time: ${(endTime - startTime).toFixed(2)}ms`);
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
    processDataOptimized,
    fastSort,
    binarySearch,
    processLargeDataset,
    LRUCache
};
