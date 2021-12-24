import { valider } from './valideForm.js';
import { creerCarte } from './carte.js';

const SUPABASE_API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTQwNywiZXhwIjoxOTU1MTY1NDA3fQ.baE0cZZF2CpyzFYUVN8wqSycVkBv_rSe-pf75ZXV2Uk"
const SUPABASE_URL = "https://iwzfnnetuctxnxwbfqlc.supabase.co/rest/v1/infos"

// Recuperation des élément du formulaire
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputNIveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")
const btnAjouter = document.querySelector("#btn-ajouter")
const btnSauvegarder = document.querySelector("#btn-sauvegarder")

// On n'ecoute l'événment sur le formulaire
btnAjouter.addEventListener("click", (event)=> {
    event.preventDefault()

    // Récupération des valeurs saisies du formulaire
    const inputNomSaisi = inputNom.value
    const inputPrenomSaisi = inputPrenom.value
    const inputBiographieSaisi = inputBiographie.value
    const inputNIveauSaisi = inputNIveau.value

    // Vérificaation des informations du formulaire
    valider(); 
    // Création de l'element à mettre dans la carte 
    const nouvelleInfos = {
        nom : inputNomSaisi ,
        prenom : inputPrenomSaisi,
        bio : inputBiographieSaisi,
        niveau: inputNIveauSaisi,
    }
    
    // Appel de la fonction pour creer une nouvelle carte
    creerCarte(nouvelleInfos)

    inputNom.value = ""
    inputPrenom.value = ""
    inputBiographie.value = ""
    inputNIveau.value = ""

});

btnSauvegarder
