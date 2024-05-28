let array=[[1,3,4],5,6];
let i=0;
while (i<array.length){
    if (Array.isArray(array[i])){
        array[i]=[];
    }
    i += 1;
}
array.length=0;
array[0]=[];
console.log(array); 