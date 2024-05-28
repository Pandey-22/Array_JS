let array=[1,2,3,4,5];
let i=0;
let largest=0;
let smallest=array[i];
while (i<array.length){
    let num=array[i];
    if (num>largest){
        largest=num;
    }
    else if (num<smallest){
        smallest=num;
    }
    i+=1;
}
console.log(largest,"it is largest number");
console.log(smallest,"it is smallest number");