#!/usr/bin/env python3
"""
Sample Python file with security improvements.
"""

import os
import sys
import logging
import ast
import re

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def process_data(data):
    """Process some data safely."""
    logger.info(f"Processing data: {data}")
    result = data * 2
    logger.info(f"Result: {result}")
    return result

def calculate_sum(a, b):
    """Calculate sum of two numbers safely.
    
    Args:
        a (int): First number
        b (int): Second number
    
    Returns:
        int: Sum of a and b
    """
    if not isinstance(a, (int, float)) or not isinstance(b, (int, float)):
        raise ValueError("Inputs must be numbers")
    return a + b

def safe_eval(expression):
    """Safely evaluate mathematical expressions."""
    try:
        # Use ast.literal_eval for safe evaluation
        return ast.literal_eval(expression)
    except (ValueError, SyntaxError) as e:
        logger.error(f"Invalid expression: {e}")
        return None

def main():
    logger.info("Starting secure application...")
    
    # Simulate some processing
    data = [1, 2, 3, 4, 5]
    for item in data:
        logger.info(f"Processing item: {item}")
        result = process_data(item)
        logger.info(f"Item {item} processed: {result}")
    
    logger.info("Application completed!")

if __name__ == "__main__":
    main()
