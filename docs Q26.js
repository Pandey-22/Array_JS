let array=['Red','Maroon','Yellow','Olive'];
let newArray=[];
for (let i=0; i<array.length; i++){
    let c=Array.from(array[i]);
    newArray.push(c);
}
console.log(newArray);