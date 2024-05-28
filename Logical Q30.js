// let array=[6,10];
// let newArray=[];
// for (let i=Math.min(...array); i<=Math.max(...array); i++){
//     newArray.push(i);
// }
// console.log(newArray);




// let array=[9,1];
// let newArray=[];
// for (let i=Math.min(...array); i<=Math.max(...array); i++){
//     newArray.push(i);
// }
// console.log("New Array = ",newArray);




let str="my name is dular pandey";
let i=0;
while (i<str.length){
    if (str[i] == " "){
        process.stdout.write("-");
    } 
    else{
        process.stdout.write(str[i]);
    }
    i+=1;
}
console.log();