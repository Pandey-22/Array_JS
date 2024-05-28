let array=[['g','f','g'],['i','s'],['b','e','s','t']];
str=""
for (let i=0; i<array.length; i++){
    for (let j=0; j<array[i].length; j++){
        str=str+array[i][j];
    }
}
console.log(str);