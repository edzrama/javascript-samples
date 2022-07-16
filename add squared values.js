const array1 = [2, 3, 4, 5];
 
const result = array1.reduce((a, b) => {
    return (array1.indexOf(b -1) === 0) ? (a*a + b*b) : (a + b*b);

});

console.log(result); 