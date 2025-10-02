#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Inline function for better performance
static inline int calculate_sum(int a, int b) {
    return a + b;
}

// Efficient string operations
char* create_string_efficient(const char* input) {
    if (!input) return NULL;
    
    size_t len = strlen(input);
    char* str = malloc(len + 1);
    if (!str) return NULL;
    
    // Use memcpy for better performance
    memcpy(str, input, len + 1);
    return str;
}

// Optimized string copying
void copy_string_fast(char* dest, const char* src, size_t max_len) {
    if (!dest || !src || max_len == 0) return;
    
    // Use strlcpy if available, otherwise strncpy
    strncpy(dest, src, max_len - 1);
    dest[max_len - 1] = '\0';
}

// Optimized array processing
void process_array_fast(int* arr, size_t size) {
    if (!arr || size == 0) return;
    
    // Unroll loop for better performance
    size_t i;
    for (i = 0; i < size - 3; i += 4) {
        arr[i] *= 2;
        arr[i + 1] *= 2;
        arr[i + 2] *= 2;
        arr[i + 3] *= 2;
    }
    
    // Handle remaining elements
    for (; i < size; i++) {
        arr[i] *= 2;
    }
}

int main() {
    printf("Starting optimized C application...\n");
    
    char* str = create_string_efficient("Hello World");
    if (str) {
        printf("String: %s\n", str);
        free(str);
    }
    
    char buffer[20];
    copy_string_fast(buffer, "Fast string", sizeof(buffer));
    printf("Copied: %s\n", buffer);
    
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8};
    size_t size = sizeof(arr) / sizeof(arr[0]);
    process_array_fast(arr, size);
    
    printf("Processed array: ");
    for (size_t i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    
    return 0;
}
