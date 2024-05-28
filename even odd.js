const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number of items"));
let i=0;
let original_array=[];
let even_array=[];
let odd_array=[];
while (i<number){
    let number1=parseInt(prompt("please enter the number to find even and odd number"));
    original_array.push(number1);
    if (original_array[i]%2==0){
        even_array.push(original_array[i]);
    }
    else{
        odd_array.push(original_array[i]);
    }
    i+=1;
}
console.log("Original Array = ",original_array);
console.log("Array of even number = ",even_array);
console.log("Array of odd number = ",odd_array);