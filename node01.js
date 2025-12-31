const nimi = process.argv[2]; 
if (!nimi) { 
    console.log("Palun sisesta nimi"); 
} else { 
    console.log("Tere", nimi);
 }