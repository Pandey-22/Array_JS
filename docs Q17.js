let array=[1234,122,1984,19372,100];
let array1=[1234,922,1984,19372,100];
for (let i of array){
    for (let j of array1){
        if (i==j){
            console.log(i);
        }
    }
}