// Write your function here

function areValidCredentials(a, b) {
if (a.length>3 && b.length>=8){
return true;
} else {return false}

}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> verdadero