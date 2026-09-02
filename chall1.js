
var prompt = require('prompt-sync')();
var n = prompt('quel âge as-tu : ');
if (n >= 18)
    console.log("Accès autorisé")
else if (n < 18)
    console.log("Accès refusé")
