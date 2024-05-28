var list=[2234,122,1984,29372,100];
let i=0;
let c=[];
while (i<list.length){
    let b=list[i];
    while (b>0) {
        r=b%10;
        b=Math.floor(b/10);
    }
    c.push(r);
    i+=1;
}
console.log(c);