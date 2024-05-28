let a=[7,8,9,1,2];
let i=0;
let b=1;
let c=[];
while (i<a.length){
    let d=a[i]*b;
    d=d%10;
    c.push(d);
    b=b+1;
    i=i+1;
}
console.log(c);