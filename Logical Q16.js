let array=["p","q"];
let i=1;
let b=[];
while (i<=5){
    let j=0;
    while (j<array.length){
        let c=array[j]+i.toString();
        b.push(c);
        j+=1;
    }
    i+=1;
}
console.log(b);