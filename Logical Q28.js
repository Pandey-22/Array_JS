let array=[-2,3.1,4,5,-6,-9];
let i=0;
let positive_array=[];
let decimal_array=[];
let negative_array=[];
while (i<array.length){
    if (Number.isInteger(array[i]) && array[i]>0){
        positive_array.push(array[i]);
    } 
    else if (Number.isInteger(array[i]) && array[i]<0){
        negative_array.push(array[i]);
    } 
    else if (!Number.isInteger(array[i])){
        decimal_array.push(array[i]);
    }
    i+=1;
}
console.log("Positive Array =",positive_array);
console.log("Decimal Array =",decimal_array);
console.log("Negative Array =",negative_array);