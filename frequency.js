function countFreq(arr,n){
    let visited = new Array(n).fill(false);
    let frequency=[];
    for (let i=0; i<n; i++){
        if (visited[i] === true){
            continue;
        }
        let count=1;
        for (let j=i+1; j<n; j++){
            if (arr[i] === arr[j]){
                visited[j]=true;
                count+=1;
            }
        }
        frequency.push(`${arr[i]}=${count}`);
    }
    console.log(frequency.join(','));
}
let arr=[10,20,20,10,10,20,5,20];
let n=arr.length;
countFreq(arr,n);