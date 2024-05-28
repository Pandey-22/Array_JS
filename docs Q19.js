let array=[1,2,3,4,5,6];
let newArray=[];
for (let i=0; i<array.length-1; i++){
    let b=[array[i],array[i+1]];
    newArray.push(b);
}
console.log(newArray);