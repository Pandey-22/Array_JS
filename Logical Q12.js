let a=["T","F","T","F",
         "T","F","F","T",
         "T","T","T","F",
         "F","F","T","F"];
let i=0;
let b=0; 
while (i<a.length){
    if (a[i] == "T"){
        b+=1;
    }
    i+=1;
}
console.log(b);