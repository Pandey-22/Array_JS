let a=[1,2,3,4];
let b="emp";
let i=0;
let e=[];
while (i<a.length){
    let c=a[i].toString();
    let d=b+c;
    e.push(d);
    i+=1;
}
console.log(e);