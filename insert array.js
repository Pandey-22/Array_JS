// let array = [1, 2, 3];
// array.push(4, 5); 
// console.log(array); 



// let array = [1, 2, 3];
// array.unshift(0);  
// console.log(array);


// let array = [1, 2, 3, 5];
// array.splice(3,0,4); 
// console.log(array); 




// let array=[11,22,33,44];
// console.log(array);
// array.splice(2,0,55);
// console.log(array);
// array.splice(-1,0,20)
// console.log(array);




const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number of size:-"));
let array=[];
for (let i=0; i<number; i++){
    let value=parseInt(prompt("please enter the value:-"));
    array.push(value);
}
let insert=prompt("please enter value to insert:-");
let index=parseInt(prompt("please enter index where you want to insert:-"));
array.splice(index,0,insert);
console.log(array);