// Write your function here
function getElementsGreaterThan10AtProperty(a, b) {

let array1=a[b]
let array = [];
if (Object.entries(a).length === 0){
    return array
} else {
    let array = [];
    
    for (let i = 0; i < a[b].length; i++) {
        let valor=array1[i];
        if (valor>10){
        array.push(valor)}
        
        }
        
return array; } 
 }


var obj = {
  key: [1, 20, 30]
};

var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]