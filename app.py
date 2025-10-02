#!/usr/bin/env python3
"""
Sample Python file with quality improvements.
"""

import os
import sys
import logging
from typing import List, Union

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def process_data(data: Union[int, float, List[Union[int, float]]]) -> Union[int, float, List[Union[int, float]]]:
    """Process some data with proper type hints and validation.
    
    Args:
        data: Input data to process (int, float, or list of numbers)
    
    Returns:
        Processed data (same type as input)
    
    Raises:
        ValueError: If input data is invalid
    """
    if not isinstance(data, (int, float, list)):
        raise ValueError("Data must be a number or list of numbers")
    
    logger.info(f"Processing data: {data}")
    
    if isinstance(data, list):
        result = [item * 2 for item in data]
    else:
        result = data * 2
    
    logger.info(f"Result: {result}")
    return result

def calculate_sum(a: Union[int, float], b: Union[int, float]) -> Union[int, float]:
    """Calculate sum of two numbers with type hints.
    
    Args:
        a: First number
        b: Second number
    
    Returns:
        Sum of a and b
    
    Raises:
        TypeError: If inputs are not numbers
    """
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise TypeError("Both inputs must be numbers")
    
    return a + b

def main() -> None:
    """Main function with proper type hints."""
    logger.info("Starting high-quality application...")
    
    try:
        # Simulate some processing
        data = [1, 2, 3, 4, 5]
        for item in data:
            logger.info(f"Processing item: {item}")
            result = process_data(item)
            logger.info(f"Item {item} processed: {result}")
        
        logger.info("Application completed successfully!")
        
    except Exception as e:
        logger.error(f"Application failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
