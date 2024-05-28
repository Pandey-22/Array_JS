let array=[34.67,12,-94.89,0,'python','C#'];
let newArray=[];
let i=0;
while (i<array.length){
    if (typeof array[i] == 'number'){
        newArray.push(array[i]);
    }
    i+=1;
}
newArray = newArray.filter(item => item !== 34.67 && item !== -94.89);
console.log(newArray);