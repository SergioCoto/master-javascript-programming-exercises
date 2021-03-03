// Write your function here
function getAverageOfElementsAtProperty(a, b) {
    // your code here
    let largo = a[b].length
    
    //console.log(largo)
    if (a[b]==null) {return 0}
    else if (largo == 1) {
        return 0
    } else if (largo == 0) {
        return 0
    } else {
        let suma=0;
        let array=a[b];
        let largo1 = array.length
        for (let i=0;i<largo1;i++) {
           
            suma=suma+array[i]

    }
    return suma/largo1;
    }

}

var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2