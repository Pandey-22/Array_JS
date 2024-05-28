let str="My Name is Dular Pandey";
let b=str.split(' ');
let i=b.length-1;
let e_s="";
while (i>=0){
    let c=b[i];
    let j=c.length-1;
    while (j>=0){
        let f=c[j];
        e_s+=f; 
        j-=1;
    }
    e_s+=" ";
    i-=1;
}
console.log(e_s.trim());