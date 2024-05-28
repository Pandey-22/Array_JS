let array=[[1,1,1,1],[20,37,20,21],2];
for (let i=0; i<array.length; i++){
    array.length=0;
    array.push([1,1]);
    array.push([20,37,20]);
}
console.log(array)