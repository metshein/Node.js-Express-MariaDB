//node03.js
//const minu_ryhm = require("./students.js");

// //destrktuurimine
// const { opilased, vanused } = require("./students.js");

// console.log(opilased)
// console.log(vanused)

// console.log(opilased);
// console.log(vanused);

const fs = require("fs");

//kausta loomine
fs.mkdir("./newfolder", (err) => {
    if (err) {
        console.log("Viga: " + err);
        return;
    }
    console.log("Kaust loodud");
});

//kausta kustutamine
fs.rmdir("./newfolder", (err) => {
    if (err) {
        console.log("Viga: " + err);
        return;
    }
    console.log("Kaust kustutatud");
});




// fs.readFile("./assets/tekst.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("Viga: " + err);
//         return;
//     }
//     console.log(data);
// });

// fs.writeFile("./assets/uustekst.txt", "See on uus tekst", (err) => {
//     if (err) {
//         console.log("Viga: " + err);
//         return;
//     }
//     console.log("Fail kirjutatud");
// });

// fs.appendFile("./assets/tekst.txt", "\nSee on lisatud tekst", (err) => {
//     if (err) {
//         console.log("Viga: " + err);
//         return;
//     }
//     console.log("Faili on lisatud tekst");
// });

// fs.unlink("./assets/uustekst.txt", (err) => {
//     if (err) {
//         console.log("Viga: " + err);
//         return;
//     }
//     console.log("Fail on kustutatud");
// });