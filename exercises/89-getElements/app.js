// Write your function here
function getElementsThatEqual10AtProperty(a, b) {

let array1=a[b]
    let array = [];
    
    for (let i = 0; i < a[b].length; i++) {
        let valor=array1[i];
        if (valor==10){
        array.push(valor)}
        
        }
        
return array;  
 }


var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]