// Write your function here
function addToBackOfNew(a, b) {
let array1= Array();

for (let i=0;i<a.length;i++){
array1.push(a[i]);
}
array1.push(b);
return array1;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]