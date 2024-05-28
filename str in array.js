var str="aaabbbcccaaaddd";
let i=0;
let array=[];
let j=0;
while (i<str.length){
    if (!array.includes(str[i])){
        array.push(str[i]);
    }
    i+=1;
}
console.log(array);