// let l=[11,22,33];
// l.push(44);
// console.log(l);
// l.push(55);
// console.log(l);
// l.push([10,20]);
// console.log(l);



// # for loop
// const prompt=require('prompt-sync')();
// let array=[];
// let number=parseInt(prompt("please enter a number of items"));
// for (let i=0; i<number; i++){
//     num=parseInt(prompt("please enter items to add in the array"));
//     array.push(num);
//     console.log(array);
// console.log();
// }
// console.log("Array = ",array)




// # while loop 
const prompt=require('prompt-sync')();
let array=[];
let number=parseInt(prompt("please enter a number of items"));
let i=0;
while (i<number){
    num=parseInt(prompt("plese enter the items to add in the array"));
    array.push(num);
    console.log(array);
    i+=1;
console.log();
}
console.log("Array = ",array);