//Secondo snack
//Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const guestNames = ['Carlo', 'Vitantonio', 'Sara', 'Lorenzo', 'Davide', 'Morghen'];
const guestSurnames = ['Lollobrigida', 'Paparella', 'Genuardi', 'Pepperini', 'Isaia', 'Tarquini'];
let guest;

for (let i = 0; i < 3; i++) {
    guest = `${guestNames[Math.floor(Math.random() * guestNames.length)]} ${guestSurnames[Math.floor(Math.random() * guestSurnames.length)]}`;
    console.log(guest);
}