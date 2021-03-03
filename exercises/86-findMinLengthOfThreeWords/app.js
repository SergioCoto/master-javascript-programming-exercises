// Write your function here

function findMinLengthOfThreeWords(a, b, c) {
let largo1=a.length;
let largo2=b.length;
let largo3=c.length;


if (largo1<largo2 && largo1<largo3) {
    return largo1;
} else if (largo2<largo1 && largo2<largo3){
    return largo2;
} else {
    return largo3;
}

}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1