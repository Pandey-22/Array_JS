// const prompt=require('prompt-sync')();
// let number=parseInt(prompt("please enter the number of size"));
// let array=[];
// for (let i=0; i<number; i++){
//     let num=prompt("please enter the value");
//     array.push(num);
// }
// console.log(array);





let array=[12,67,98,34];
let sum=array.reduce((acc,current)=>acc+current,0);
console.log(sum);
