let array=[[1,2,4],[2,4,4],[1,2]];
let newArray=[];
for (let i=0; i<array.length; i++){
    let sum=0;
    for (let j=0; j<array[i].length; j++){
        sum+=array[i][j];
    }
    newArray.push(sum);
}
console.log(newArray);