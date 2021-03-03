// Write your function here
function select(a, b) {

    let objeto = new Object();
    //console.log (objeto)
    for (let i = 0; i < a.length; i++) {
        prueba=a[i]
        if (prueba in b) {
            //objeto.prueba=i;
            //console.log(objeto)
            objeto[prueba]=obj[prueba];
      //      let tira=prueba+": "+obj[prueba]
        //    console.log(prueba)
          //  console.log(obj[prueba])
            //console.log(tira)

           
        }
        //console.log(a[i])
    }
   // console.log(array)
   return objeto
}


var arr = ['a', 'c', 'e'];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
