//Terzo snack.
//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

const userNumber = parseInt(prompt('Inserisci un numero - Ti stamperemo il cubo dei precedenti compreso quello del numero inserito'));
console.log(userNumber, typeof(userNumber));

let cuboNumber;

//CICLO FOR
// for (let i = 0; i <= userNumber; i++) {
//     cuboNumber = i**3;
//     console.log(i, typeof(i));
//     console.log('Il cubo è:', cuboNumber, typeof(cuboNumber));
// }


//CICLO WHILE
let i = 0;

while ( i <= userNumber) {
    cuboNumber = i**3;
    console.log(i, typeof(i));
    i++;
    console.log('Il cubo è:', cuboNumber, typeof(cuboNumber));
}