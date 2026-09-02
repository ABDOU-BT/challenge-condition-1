console.log("1 → Afficher le profil")
console.log("2 → Afficher les paramètres")
console.log("3 → Afficher les notifications")
console.log("4 → Se déconnecter")
const prompt = require('prompt-sync')();
let n = +prompt('Choisissez un options : ');
switch (n) {
    case 1:
        console.log("Ouverture des profil...")
        break;
    case 2:
        console.log("Ouverture des paramètres...")
        break;
    case 3:
        console.log("Ouverture des notifications...")
        break;
    case 4:
        console.log("Déconnexion en cours...")
        break;
    default:
        console.log("Choix invalide.")




















}
