let array=[20,8,12,7,78,92,15];
let i=0;
let newArray=[];
while (i<array.length){
    let n=0;
    while (n<100){
        let j=0;
        while (j<array.length){
            if (array[j]==n){
                newArray.push(array[j]);
            }
            j=j+1;
            }
        n+=1;
        }
    i+=1;
    break
}
console.log(newArray);