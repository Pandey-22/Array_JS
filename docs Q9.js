// let array=[1,2,3,1,2,2];
// for (let i=0; i<3; i++){
//     array.pop();
// }
// console.log(array);




let arr=[4,6,4,3,4,3,4,3,8];
let count4=0;
let count3=0;
for (let i=0; i<arr.length; i++){
    if (arr[i] == 4){
        count4+=1;
    } else if (arr[i] == 3){
        count3+=1;
    }
}
console.log([count4,count3]);
