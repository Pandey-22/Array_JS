const prompt=require('prompt-sync')();
let number1=parseInt(prompt("please enter the 1st number"));
let number2=parseInt(prompt("please enter the 2nd number"));
let number3=parseInt(prompt("please enter the 3rd number"));
let new_array=[];
new_array.push(number1);
new_array.push(number2);
new_array.push(number3);
console.log(new_array);
for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
        for (let k=0; k<3; k++){
            if (i!=j && j!=k && k!=i){
                console.log(new_array[i],new_array[j],new_array[k]);
            }
        }
    }
}