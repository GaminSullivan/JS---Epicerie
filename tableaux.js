var fruits = ['Mangue', 'Raisin', 'Figue', 'Kiwi'];
var liste_fruits = "\n\r";
var demande;

for (let index = 0; index < 4; index++) {

    
    demande = prompt("Veuillez choisir un fruit" + listedefruits(fruits));

    if (demande == "Kiwi") {
        //cherche l'élément du tableau qui a l'indice 3 et le remplace par "indisponible"
        if (fruits[3] == "Kiwi") {
            alert("Voici votre Kiwi")
            fruits.splice(3, 1, "Kiwi - indisponible");
        }
        else if (fruits[3] == "Kiwi - indisponible") {
            alert("Le Kiwi est actuellement indisponible");
        }
    }
    else if (demande == "Figue" ) {
        if (fruits[2] == "Figue") {
            alert("Voici votre Figue")
            fruits.splice(2,1, "Figue - indisponible");
        }
        else if (fruits[2] == "Figue - indisponible") {
            alert("La Figue est actuellement indisponible");
        }
    }
    else if (demande == "Raisin" ) {
        if (fruits[1] == "Raisin") {
            alert("Voici vos Raisins")
            fruits.splice(1,1, "Raisin - indisponible");
        }
        else if (fruits[1] == "Raisin - indisponible") {
            alert("Les Raisins sont actuellement indisponible");
        }
    }
    else if (demande == "Mangue" ) {
        if (fruits[0] == "Mangue") {
            alert("Voici votre Mangue")
            fruits.splice(0,1, "Mangue - indisponible");
            fruits;
        }
        else if (fruits[0] == "Mangue - indisponible") {
            alert("La Mangue est actuellement indisponible");
        }
    }
    

}


function listedefruits(tableau) {
    liste_fruits= "\n\r";
    for (var i = 0; i < tableau.length; i++) {

        liste_fruits = liste_fruits + tableau[i] + "\n\r";

    }
    print(fruits);
    return liste_fruits;
}