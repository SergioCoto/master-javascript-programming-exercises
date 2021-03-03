// Write your function here
function getIndexOf(a, b) {
let largo=b.length

for (let i=0;i<largo;i++){
if (a==b[i]) {
    return i;
}
}

}
var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2