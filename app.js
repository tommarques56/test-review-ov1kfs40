/**
 * Sample JavaScript application with various issues
 */

function processData(data) {
    console.log('Processing data:', data);
    return data * 2;
}

function calculateSum(a, b) {
    return a + b;
}

function main() {
    console.log('Starting JavaScript application...');
    
    const data = [1, 2, 3, 4, 5];
    for (let item of data) {
        console.log('Processing item:', item);
        const result = processData(item);
        console.log('Item processed:', result);
    }
    
    console.log('Application completed!');
}

main();
