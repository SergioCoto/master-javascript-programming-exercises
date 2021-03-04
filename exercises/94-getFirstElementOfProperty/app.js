// Write your function here
function getFirstElementOfProperty(a, b) {

let array1=a[b]
return array1[0]
let array = [];
if (Object.entries(a).length === 0){
    return array
} else {
    let array =array1[0];
    
        
return array; } 
 }

var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1