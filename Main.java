public class Main {
    public static void main(String[] args) {
        System.out.println("Starting Java application...");
        
        int[] data = {1, 2, 3, 4, 5};
        for (int item : data) {
            System.out.println("Processing item: " + item);
            int result = processData(item);
            System.out.println("Item processed: " + result);
        }
        
        System.out.println("Application completed!");
    }
    
    public static int processData(int data) {
        System.out.println("Processing data: " + data);
        return data * 2;
    }
    
    public static int calculateSum(int a, int b) {
        return a + b;
    }
}
