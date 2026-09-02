
const prompt = require('prompt-sync')();
let n = prompt('saisir un nombre : ');
if (n > 0)
    console.log("Le nombre est positif.")
else if (n < 0)
    console.log("Le nombre est négatif.")
else
    console.log("Le nombre est égal à zéro.")

