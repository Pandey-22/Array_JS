const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter a number of size:-"));
let array=[];
for(let i=0; i<number; i++){
    const value=parseFloat(prompt("please enter a value:-"));
    array.push(value);
}
console.log("Original array = ",array);
array.pop();
console.log("New array = ",array);