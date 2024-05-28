let array=[2,-7,5,-64,-14];
let positive=0;
let negative=0;
for (let i of array){
    if (i>0){
        positive=positive+1;
    }
    else{
        negative=negative+1;
    }
}
console.log("Total Positive Number = ",positive);
console.log("Total Negative Number = ",negative);