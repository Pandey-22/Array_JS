const prompt=require('prompt-sync')();
let n=parseInt(prompt("please enter a number:-"));
let i=0;
let b=1;
let a=[];
while (i<n){
    a.push(b);
    b+=1;
    i+=1;
}
console.log(a);
