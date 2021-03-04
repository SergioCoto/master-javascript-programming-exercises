// Write your function here


function countAllCharacters(str) {
    //Pasamos la cadena a minusculas
    str = str.toLowerCase()
    //quitamos los espacios en blanco
    str = str.replace(/\s/g, "");
    final = {} //Donde guardamos los resultados
    for (let char in str) { //Cogemos el indice de cada caracter
        if (str[char] in final) { //Si ya existe, simplemente aumentamos el contador
            final[str[char]] = final[str[char]] + 1
        } else { // Si no existe, lo inicializamos a 1
            final[str[char]] = 1
        }

        //Mostar los resultados
    }
        return final
    }

    var output = countAllCharacters('banana');
    console.log(output); // --> {b: 1, a: 3, n: 2}