var array=[1,2,3,2,1,3,2,1,2];
let i=0;
let new_array=[];
while (i<array.length){
    if (new_array.indexOf(array[i]) == -1){
        new_array.push(array[i]);
    }
    i+=1;
}
console.log(new_array);
