function isOldEnoughToDrink(valor){
    // your code here	
    if (valor>=21) {
        return true
    } else {
        return false
    }
}
var output = isOldEnoughToDrink(22);
console.log(output); // --> true