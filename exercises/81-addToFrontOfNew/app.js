// Write your function here

function addToFrontOfNew(a, b) {
let array1= Array();
array1.push(b);
for (let i=0;i<a.length;i++){
array1.push(a[i]);
}
return array1;
}



var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]