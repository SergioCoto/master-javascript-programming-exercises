// Write your function here

function getLastElementOfProperty(a, b) {

let array1=a[b];
let largo=array1.length;


return array1[largo-1]; 
}

 var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5