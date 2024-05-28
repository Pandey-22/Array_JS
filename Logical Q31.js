let names=["Swathi","Aariya","Archana","Anjali","Jain","Ratua"];
let room=[1,2,3];
let i=0;
let j=0;
while (j<room.length){
    console.log("room",room[j]);
    console.log("1.",names[i]);
    console.log("2.",names[i+1]);
    j=j+1;
    i=i+2;
    console.log();
}