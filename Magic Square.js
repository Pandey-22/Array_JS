// magic square number:-
// 2   7   6
// 9   5   1
// 4   3   8
const prompt=require('prompt-sync')();
let i=0;
let a=[];
while (i<3){
    let j=0;
    let b=[];
    while (j<3){
        let n=parseInt(prompt("please enter the number:-"));
        b.push(n);
        j+=1;
    }
    a.push(b);
    i+=1;
}
let k=0;
while (k<3){
    let l=0;
    let row="";
    while (l<3){
        row+=a[k][l]+" ";
        l+=1;
    }
    console.log(row);
    k+=1;
}
let s1=0;
let s2=0;
let m=0;
let f=0;
while (m<3){
    let n=0;
    while (n<3){
        if (m == n){
            s1+=a[m][n];
        }
        if (m+n == 3-1){
            s2+=a[m][n];
        }
        n+=1;
    }
    m+=1;
}
if (s1 != s2){
    f=1;
} 
else{
    let o=0;
    while (o<3){
        let SR=0;
        let SC=0;
        let p=0;
        while (p<3){
            SR+=a[o][p];
            SC+=a[p][o];
            p+=1;
        }
        if (SR != s1 || SC != s1){
            f=1;
            break;
        }
        o+=1;
    }
}
if (f == 0){
    console.log("This is a magic square number.");
} 
else{
    console.log("This is not a magic square number.");
}