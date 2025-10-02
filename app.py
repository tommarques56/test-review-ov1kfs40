#!/usr/bin/env python3
"""
Sample Python file with performance improvements.
"""

import os
import sys
import logging
from functools import lru_cache
import numpy as np

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@lru_cache(maxsize=128)
def process_data(data):
    """Process some data with caching."""
    logger.info(f"Processing data: {data}")
    result = data * 2
    logger.info(f"Result: {result}")
    return result

def calculate_sum(a, b):
    """Calculate sum of two numbers efficiently.
    
    Args:
        a (int): First number
        b (int): Second number
    
    Returns:
        int: Sum of a and b
    """
    return a + b

def process_large_dataset(data):
    """Process large dataset efficiently using numpy."""
    if len(data) > 1000:
        # Use numpy for large datasets
        arr = np.array(data)
        return (arr * 2).tolist()
    else:
        # Use list comprehension for small datasets
        return [x * 2 for x in data]

def main():
    logger.info("Starting optimized application...")
    
    # Simulate some processing
    data = list(range(1000))  # Large dataset
    result = process_large_dataset(data)
    logger.info(f"Processed {len(result)} items")
    
    logger.info("Application completed!")

if __name__ == "__main__":
    main()
