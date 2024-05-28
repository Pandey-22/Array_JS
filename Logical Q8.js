let str="my3 na7me i8s a9ariya";
let i=0;
let empty_str="";
while (i<str.length){
    if (!isNaN(str[i]) && str[i] != " "){
        i+=1;
        continue;
    } else{
        empty_str+=str[i];
    }
    i+=1;
}
console.log(empty_str);