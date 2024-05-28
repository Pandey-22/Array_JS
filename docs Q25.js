let array1=['0','1','2','3','4'];
let array2=['red','green','black','blue','white'];
let array3=['100','200','300','400','500'];
let newArray=[];
for (let i=0; i<array1.length; i++){
    let b=array1[i]+array2[i]+array3[i];
    newArray.push(b);
}
console.log(newArray);