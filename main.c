#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function documentation
int calculate_sum(int a, int b) {
    return a + b;
}

// Safe string creation with proper memory management
char* create_string_safe(const char* input) {
    if (!input) return NULL;
    
    size_t len = strlen(input);
    char* str = malloc(len + 1);
    if (!str) return NULL;
    
    strncpy(str, input, len);
    str[len] = '\0';
    return str;
}

// Safe string copying with bounds checking
int copy_string_safe(char* dest, size_t dest_size, const char* src) {
    if (!dest || !src || dest_size == 0) return -1;
    
    size_t src_len = strlen(src);
    if (src_len >= dest_size) return -1;
    
    strncpy(dest, src, dest_size - 1);
    dest[dest_size - 1] = '\0';
    return 0;
}

// Initialize variables properly
int get_value_safe() {
    int value = 0;  // Properly initialized
    return value;
}

int main() {
    printf("Starting secure C application...\n");
    
    char* str = create_string_safe("Hello World");
    if (str) {
        printf("String: %s\n", str);
        free(str);  // Properly freed
    }
    
    char buffer[20];
    const char* input = "Safe string";
    if (copy_string_safe(buffer, sizeof(buffer), input) == 0) {
        printf("Copied: %s\n", buffer);
    }
    
    int val = get_value_safe();
    printf("Value: %d\n", val);
    
    return 0;
}
