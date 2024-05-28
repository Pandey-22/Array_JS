let array=["vishal","pooja","dular","jitesh"];
let i=0;
let newArray=[];
while (i<array.length){
    if (i == 2){
        newArray.push(array[i][0]);
    } 
    else{
        newArray.push(array[i][array[i].length-1]);
    }
    i+=1;
}
console.log(newArray);