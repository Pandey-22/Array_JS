// let array=[5,7,9,2,4,4];
// let i=0;
// while (i<array.length){
//     console.log(array[i],array[i+1]);
//     i=i+2;
// }





let array1=["Hello","Fine"];
let array2=["Dear","sir"];
let i=0;
let newArray=[];
while (i<array1.length){
    let j=0;
    while (j<array1.length){
        let c=[array1[i]+array2[j]];
        newArray.push(c);
        j=j+1;
    }
    i=i+1;
}
console.log(newArray);