const array=["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
let newArray=[];
for (let i=0; i<3; i++){
    let b=[];
    for (let j=i; j<array.length; j+=3){
        b.push(array[j]);
    }
    newArray.push(b);
}
console.log(newArray);