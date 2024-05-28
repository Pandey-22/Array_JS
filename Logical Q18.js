let task=["excercise","breakfast","first codind","lunch","second coding","english","recreation","dinner"];
let completetask=["excercise","breakfast","first codind","lunch"];
let len=task.length;
let len1=completetask.length;
let i=0;
let c=0;
let b=[];
while (i<len){
    if (completetask.indexOf(task[i]) == -1){
        b.push(task[i]);
        c+=1;
    }
    i+=1;
}
console.log("Number of lefted tasks is",c);
console.log("lefted tasks is",b);