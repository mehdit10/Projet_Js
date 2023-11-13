



let month;
let day;
let year;

alert("\n NB : Pour le bon fonctionnement du compte à rebours !!!\n\n\t Veuillez suivre strictement les instructions suivantes")
alert("\n NB : Pour écrire le mois !!!\n\n\t Tout d'abord, les mots employés doivent être en anglais !\n\t Vous aurez à saisir les 3 premières lettres du mois\n\t dont la première en MAJUSCULE \n Exemple :\n\t Jan  => (January)\n\t Feb  => (February)\n\t Mar  => (March)\n\t Mai  => (Mai)\n\t ...... ainsi de suite ....  ")

month = prompt("Veuillez saisir le mois : ");

alert("\n NB : Pour écrire le nombre de jour !!!\n\n\t Il faut rentrer un nombre qui\n\t n'est pas égale à 0\n\t et qui ne dépasse pas 31\n\t Veuillez tenir compte du nombre\n\t total de jours que contient chaque mois !")

day = parseInt(prompt("Veuillez saisir le jour : "))

alert("\n NB : Pour écrire l'année !!!\n\n\t Donner une année qui ne dépasse pas 250000    :-) ")

year = parseInt(prompt("Veuillez saisir l'année : "))

const text = document.querySelector('h2');

function temps_restant(){

    const actuel = new Date().getTime();
    const futur = new Date(`${month} ${day}, ${year}`).getTime();

    const distance = futur - actuel;

    const jour = Math.floor(distance / (1000 * 60 * 60 * 24));
    const heure = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minute = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60))
    const seconde = Math.floor((distance % (1000 * 60)) / 1000)

    text.innerText = `${jour}j ${heure}h ${minute}m ${seconde}s`;

}

temps_restant()

const interval = setInterval(() => {
    
    temps_restant()

}, 1000);





