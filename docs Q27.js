let array=[12,45,23,67,78,90,45,32,100,76,38,62,73,29,83];
let i=0;
let newArray=[];
while (i<array.length-2){
    let b=[array[i],array[i+1],array[i+2]];
    newArray.push(b);
    i+=3;
}
console.log(newArray);