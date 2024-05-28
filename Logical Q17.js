let binarynumber=[1,0,0,1,1,0,1,1];
let len=binarynumber.length;
let i=len-1;
let k=0;
let sum=0;
while (i>=0){
    let b=binarynumber[i];
    let c=b*2**k;
    sum+=c;
    i-=1;
    k+=1;
}
console.log(sum);