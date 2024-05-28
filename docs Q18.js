let array1=['1','2','3','4','5','6','7','8'];
let array2=['12','34','56','78'];
let array3=['1','2','3'];
let array4=['12'];
array1.push(...array2);
console.log(array1);
array3.push(...array4);
console.log(array3)