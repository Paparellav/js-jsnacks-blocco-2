//Primo snack
// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


//CICLO FOR

// let userChoice;
// let sum = 0;

// for (let i = 0; i < 5; i++) {
//     userChoice = parseInt(prompt('Inserisci un numero'));
//     console.log(userChoice);
//     sum += userChoice;
// }

// console.log(sum);

// CICLO WHILE

let i = 0
let userChoice;
let sum = 0;
while (i < 5) {
    userChoice = parseInt(prompt('Inserisci un numero'));
    console.log(userChoice);
    i++;
    sum += userChoice;
}

console.log(sum);