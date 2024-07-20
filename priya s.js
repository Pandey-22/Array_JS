let arr=[1,2,3,4,5,6];
let i=0;
let newarr=[];
while (i<=arr.length){
    if (arr[i]%2==0){
        newarr.push(arr[i]);
    }
    i+=1;
}
let j=0;
while (j<arr.length){
    if (arr[j]%2!=0){
        newarr.push(arr[j]);
    }
    j+=1
} 
console.log(newarr); 




// console.log(82 + " " +  2 +  "   " +  3);


