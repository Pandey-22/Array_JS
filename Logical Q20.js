let str="dularpandey";
let i=0;
let a1=[];
let a2=[];
while (i<str.length){
    let char=str[i];
    if (!a2.includes(char)){
        a2.push(char);
        let count=0;
        let j=0;
        while (j<str.length){
            if (str[j] == char){
                count+=1;
            }
            j+=1;
        }
        let d=char+":"+count.toString(); 
        a1.push(d);
    }
    i+=1;
}
console.log(a1);