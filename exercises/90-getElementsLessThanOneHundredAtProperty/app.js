// Write your function here
function getElementsLessThan100AtProperty(a, b) {

let array1=a[b]
let array = [];
if (Object.entries(a).length === 0){
    return array
} else {
    let array = [];
    
    for (let i = 0; i < a[b].length; i++) {
        let valor=array1[i];
        if (valor<100){
        array.push(valor)}
        
        }
        
return array; } 
 }
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]