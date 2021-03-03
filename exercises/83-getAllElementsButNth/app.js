// Write your function here
function getAllElementsButNth(a, b) {
let array1= Array();

for (let i=0;i<a.length;i++){
array1.push(a[i]);
}
array1.push(b);
return array1;

}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']