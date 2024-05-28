let array1=["m","na","i","Aari"];
let array2=["y","me","s","ya"];
let i=0;
let newArray=[];
while (i<array1.length){
    let c=[array1[i]+array2[i]];
    newArray.push(c);
    i=i+1;
}
console.log(newArray);