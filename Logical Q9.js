let array=[1,2,3,4,5,6];
let newArray=[];
let i=0;
let j=array.length-1;
while (i<Math.floor(array.length/2)){
    newArray.push(array[j]);
    newArray.push(array[i]);
    j-=1;
    i+=1;
}
console.log(newArray);