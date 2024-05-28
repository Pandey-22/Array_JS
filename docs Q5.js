let array=[9119];
let i=0;
while (i<array.length){
    let n=array[i];
    str=""
    let j=0;
    while (j<n){
        let remainder=n%10;
        let square=remainder*remainder;
        str=str+square
        n=Math.floor(n/10);
        j+=1;
    }
    i+=1
}
console.log(str);