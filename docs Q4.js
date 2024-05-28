const prompt=require('prompt-sync')();
let size=parseInt(prompt("please enter the size of the array:-"));
const array=[];
for (let i=0; i<size; i++){
    let value=parseInt(prompt("please enter the value:-"));
    array.push(value);
}
let max1=Math.max(...array);
console.log("First Max = ",max1);
let index1=array.indexOf(max1);
if (index1 != -1){
    array.splice(index1,1);
}
let max2=Math.max(...array);
console.log("Second Max = ",max2);
let index2=array.indexOf(max2);
if (index2 != -1){
    array.splice(index2,1);
}
let max3=Math.max(...array);
console.log("Third Max = ",max3);