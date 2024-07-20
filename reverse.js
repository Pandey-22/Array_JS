
const L = [23, 45, 71, 90];
function reverseAndPrintArray(arr) {
    const reversedArray = [];
    // Only change code below this line
    let i = arr.length - 1;
    while (i >= 0) {
        console.log(arr[i]);
        reversedArray.push(arr[i]);
        i -= 1;
    }
    // Only change code above this line
    return reversedArray;
}
const reversedL = reverseAndPrintArray(L); 
console.log(reversedL); // [90, 71, 45, 23]
