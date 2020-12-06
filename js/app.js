// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nbAleatoire = Math.floor(Math.random() * 1001);

// (Etape 5 - Définir les nouvelles variables)
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nb) {
    let instruction =  document.createElement('div');

    if(nb < nbAleatoire) {
        // C'est plus
        instruction.textContent = "#" + coups + " ( " + nb + " ) C'est plus !";
        instruction.className = "instruction plus";
    }
    else if(nb > nbAleatoire) {
        // C'est moins
        instruction.textContent = "#" + coups + " ( " + nb + " ) C'est moins !";
        instruction.className = "instruction moins";
    }
    else {
        // Gagné
        instruction.textContent = "#" + coups + " ( " + nb + " ) Vous avez gagné !";
        instruction.className = "instruction fini";
    }

    // Ajouter les instructions avant la précédente
    document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)) {
    // Afficher le message d'erreur
    error.style.display = "inline";
    }
    else {
    // Cacher le message d'erreur
    error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault(); // annuler l'évènement par défaut du navigateur
    if (isNaN(input.value) || input.value == ''){
        // Mettre la bordure du formulaire en rouge
        input.style.borderColor = "red";
    }
    else {
         // Ajouter un nouveau coup
         coups++;
         // Mettre la bordure du formulaire en gris
         input.style.borderColor = "silver";
         // Stocker le nombre rentré par l'utilisateur et remettre le champ vide
         nombreChoisi = input.value;
         input.value = "";
         // Lancer la fonction pour vérifié si le nombre entré est le bon
         verifier(nombreChoisi);
    }
});

