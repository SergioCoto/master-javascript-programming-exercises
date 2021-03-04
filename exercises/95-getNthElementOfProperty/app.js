// Write your function here
// Write your function here
function getNthElementOfProperty(a, b, c) {
let array1=a[b];
//console.log(array1[c])
return array1[c]
 }
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2