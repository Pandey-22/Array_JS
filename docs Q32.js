// for (let i=4; i<31; i++){
//     if (i%2==0){
//         console.log(i);
//     }
// }




let array=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
b=[];
for (let i=0; i<array.length+4; i++){
    if (i%2==0){
        b.push(i);
    }
}
console.log(b);