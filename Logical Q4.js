const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number of items"));
let i=0;
let array=[];
while (i<number){
    let number1=parseInt(prompt("please enter the items"));
    array.push(number1);
    i+=1;
}
console.log(array);