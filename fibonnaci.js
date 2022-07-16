function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var fibb = [];
    for(var i=0; i<=n; i++) {
        if (i === 1) {
            fibb.push(0);
        } else if(i=== 2) { fibb.push(1);}
        else { 
        fibb.push((fibb[i-1] + fibb[i-2]));
        }
    }
    
    return fibb;
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(13));
