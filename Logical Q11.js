let array=[3,2,1,0,4,5,6,9,8,7];
let i=0;
while (i<array.length-1){
    let j=0;
    while (j<array.length-1){
        if (array[j]>array[j+1]){
            [array[j],array[j+1]]=[array[j+1],array[j]];
        }
        j+=1;
    }
    i+=1;
}
console.log(array);