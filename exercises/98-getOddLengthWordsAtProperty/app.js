// Write your function here
function getOddLengthWordsAtProperty(a, b) {
    let array1 = a[b];
    
    let array=[]
    let largo = array1.length;
    
    for (i=0;i<largo;i++){
        let valor=array1[i];
        
        if (valor.length % 2 != 0) {array.push(valor) }
        
    }

    return array;
}

var obj = {
    key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']