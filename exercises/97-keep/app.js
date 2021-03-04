// Write your function here
function keep(a, b) {
    let array = [];
    if (Object.entries(a).length === 0) {
        return array
    } else {
        let largo = (a).length;
        for (let i = 0; i < largo; i++) {
            let valor = a[i];
            if (valor == b) {
                array.push(valor)
            }
        }
        return array;
    }
}


var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); //--> [2, 2]