let array=['s','d','f','s','d','f','s','f','k','o','p','i','w','e','k','c'];
let i=0;
while (i<array.length){
    if (array[i]=="f"){
        var c=i;
    }
    else if (array[i]=="c"){
        var d=i;
    }
    else if (array[i]=="k"){
        var e=i;
    }
    else if (array[i]=="w"){
        var f=i;
    }
    i+=1;
}
console.log("f last index position",c);
console.log("c last index position",d);
console.log("k last index position",e);
console.log("w last index position",f);