const prompt=require('prompt-sync')();
let letter=prompt("please enter a letter:-");
if (letter == letter.toUpperCase()){
    letter=letter.toLowerCase();
    console.log(letter);
} 
else if (letter == letter.toLowerCase()){
    letter=letter.toUpperCase();
    console.log(letter);
}
else {
    console.log("It's not a letter");
}