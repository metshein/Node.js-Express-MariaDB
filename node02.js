// console.log(console);
// console.error("Midagi läks valesti");
// console.warn("See on hoiatus");
// console.log(process);
// console.log(process.argv);

// const nimi = process.argv[2]; 
// if (nimi) { 
//     console.log(`Tere ${nimi}`); 
// } else { 
//     console.log("Nimi puudub"); 
// }

// console.log(process.env);

// const keskkond = process.env.NODE_ENV; 
// console.log(`Keskkond: ${keskkond}`);

console.log(__filename);
console.log(__dirname);

const path = require("path"); 
const fail = path.join(__dirname, "andmed.txt"); 
console.log(fail)