const prompt=require('prompt-sync')();
let size=parseInt(prompt("please enter the max size:-"));
let array=[];
for (let i=0; i<size; i++){
    let value=parseInt(prompt("please enter the value:-"));
    array.push(value);
}
console.log("Original Array = ",array);
let value_to_count=parseInt(prompt("please enter a value to count:-"));
let count=0;
for (let i=0; i<array.length; i++){
    if (array[i] == value_to_count){
        count+=1;
    }
}
console.log("This element is came ",count,"times");