function checkAge(name, age) {
    // your code here
    let valor=""
    if (age >= 21) {
        valor = "Welcome, " + name+"!";
    } else {
        valor = "Go home, " + name+"!";
    }
    return valor;
}
var output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'