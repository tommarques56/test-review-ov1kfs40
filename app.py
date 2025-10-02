#!/usr/bin/env python3
"""
Sample Python file with various code issues for testing.
"""

import os
import sys

def process_data(data):
    """Process some data."""
    print(f"Processing data: {data}")
    result = data * 2
    print(f"Result: {result}")
    return result

def calculate_sum(a, b):
    """Calculate sum of two numbers."""
    return a + b

def main():
    print("Starting application...")
    
    # Simulate some processing
    data = [1, 2, 3, 4, 5]
    for item in data:
        print(f"Processing item: {item}")
        result = process_data(item)
        print(f"Item {item} processed: {result}")
    
    print("Application completed!")

if __name__ == "__main__":
    main()
