let array=["Javascript","Array","Exercises","Practice","Solution"];
let new_array=[];
for (let i=0; i<array.length; i++){
    let reversedString=array[i].split('').reverse().join('');
    new_array.push(reversedString);
}
console.log(new_array);