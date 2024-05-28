let a="Pandey is singing very loudly";
let i=0;
let b="";
while (i<a.length){
    if (a[i] !== 'i' && a[i] !== 's'){
        b+=a[i];
    }
    i+=1;
}
console.log(b);
a = "Pandey is singing very loudly";
i=0;
b=a.split(" ");
let c="";
while (i<b.length){
    if (b[i] !== "singing"){
        c+=b[i]+" ";
    }
    i+=1;
}
console.log(c.trim());