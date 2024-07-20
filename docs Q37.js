const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter the number:-"));
let i=0;
let a=[];
while (i<n){
    let b=parseInt(prompt("please enter the elemnt:-"));
    a.push(b);
    i+=1;
}
console.log(a);
