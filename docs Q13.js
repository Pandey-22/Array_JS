let array=[[],[],[],"green","red",[1,2],[],[]];
let i=0;
let new_array=[];
while (i<array.length){
    let n=array[i];
    if (Array.isArray(n) && n.length==0){
    }
    else{
        new_array.push(n);
    }
    i+=1;
}
console.log(new_array);




// let array=[[],[],[],"green","red",[1,2],[],[]];
// array.shift();
// array.shift();
// array.shift();
// array.pop();
// array.pop();
// console.log(array);