#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int calculate_sum(int a, int b) {
    return a + b;
}

char* create_string(const char* input) {
    char* str = malloc(strlen(input) + 1);
    strcpy(str, input);
    return str;
}

int main() {
    printf("Starting C application...\n");
    
    char* str = create_string("Hello World");
    printf("String: %s\n", str);
    
    int val = 0;  // Uninitialized
    printf("Value: %d\n", val);
    
    return 0;
}
