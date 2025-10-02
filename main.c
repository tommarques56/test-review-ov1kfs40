#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>

/**
 * Calculate the sum of two integers
 * @param a First integer
 * @param b Second integer
 * @return Sum of a and b
 */
int calculate_sum(int a, int b) {
    return a + b;
}

/**
 * Create a string with proper error handling
 * @param input Input string to copy
 * @return Newly allocated string or NULL on error
 */
char* create_string(const char* input) {
    if (!input) {
        fprintf(stderr, "Error: input string is NULL\n");
        return NULL;
    }
    
    size_t len = strlen(input);
    char* str = malloc(len + 1);
    if (!str) {
        fprintf(stderr, "Error: memory allocation failed\n");
        return NULL;
    }
    
    strcpy(str, input);
    return str;
}

/**
 * Copy string with bounds checking
 * @param dest Destination buffer
 * @param src Source string
 * @param dest_size Size of destination buffer
 * @return 0 on success, -1 on error
 */
int copy_string(char* dest, const char* src, size_t dest_size) {
    if (!dest || !src || dest_size == 0) {
        return -1;
    }
    
    if (strlen(src) >= dest_size) {
        fprintf(stderr, "Error: source string too long for destination\n");
        return -1;
    }
    
    strcpy(dest, src);
    return 0;
}

/**
 * Get a value with proper initialization
 * @return Initialized value
 */
int get_value(void) {
    int value = 0;  // Explicitly initialized
    return value;
}

/**
 * Main function with proper error handling
 * @return Exit status
 */
int main(void) {
    printf("Starting high-quality C application...\n");
    
    char* str = create_string("Hello World");
    if (str) {
        printf("String: %s\n", str);
        free(str);
    } else {
        fprintf(stderr, "Failed to create string\n");
        return 1;
    }
    
    char buffer[20];
    if (copy_string(buffer, "Safe string", sizeof(buffer)) == 0) {
        printf("Copied: %s\n", buffer);
    } else {
        fprintf(stderr, "Failed to copy string\n");
        return 1;
    }
    
    int val = get_value();
    printf("Value: %d\n", val);
    
    printf("Application completed successfully\n");
    return 0;
}
