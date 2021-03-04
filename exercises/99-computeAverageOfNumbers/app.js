// Write your function here
function computeAverageOfNumbers(a) {
    let largo = (a).length;
    let suma = 0;
    for (let i = 0; i < largo; i++) {
        let valor = a[i];
        suma = suma + valor
    }

promedio = suma / largo;
return promedio;
    }

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3