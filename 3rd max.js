let array=[50,40,23,70,56,12,5,10,7];
array.sort((a,b) => b-a);
if (array.length<3){
    console.log("The array doesn't have at least 3 elements.");
} 
else{
    let thirdMax=array[2];
    console.log("Third Max Number = ",thirdMax);
}