let array=[6,1,3,5,6,3,1];
let i=0;
let product=1;
let new_array=[];
while (i<array.length){
    if (!new_array.includes(array[i])){
        new_array.push(array[i]);
    }
    i+=1;
}
let j=0;
while (j<new_array.length){
    product=product*array[j];
    j+=1;
}
console.log(product);