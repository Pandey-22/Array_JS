var str="sky is blue";
var b=str.split(" ");
let c="";
let i=0;
while (i<b.length){
    b.reverse();
    c=c+b[i];
    c=c+" ";
    i+=1;
}
console.log(c);
