// list1=[4,6,8,24,12,2]
// list1.sort()
// print(max(list1))



const prompt=require('prompt-sync')();
let number=parseInt(prompt("please enter the number"));
let array=[1,2,3,4,5,6,7,8,9,10];
let i=0;
while (i<array.length){
    if (number==array[i]){
        console.log("Number = ",number,"Index of number = ",i);
        break   
    }
    i+=1;
}