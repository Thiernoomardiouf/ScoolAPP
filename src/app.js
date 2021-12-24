import { valider } from './valideForm.js';
import { creerCarte } from './carte.js';

const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMyMTM3NCwiZXhwIjoxOTU1ODk3Mzc0fQ.4OG4cncqE_T0C_IQfAqDkvJz66PpQXP-NPxF7_joiKQ"
const API_URL = "https://qrhfvjqerilazypfxbcu.supabase.co/rest/v1/infos"

// Recuperation des élément du formulaire
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputNIveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")
const btnAjouter = document.querySelector("#btn-ajouter")

const propositionElement = document.querySelector("#list-apprenants")
const btnSauvegarder = document.querySelector("#btn-sauvegarder")
const body = document.querySelector("body")

//Tableau pour stocker les cartes
let tab = []

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
        niveau: inputNIveauSaisi,
        biographie : inputBiographieSaisi,
    }

    tab.push(nouvelleInfos)

    console.log(tab)
    console.log(tab[0].nom)

    
    // Appel de la fonction pour creer une nouvelle carte
    creerCarte(nouvelleInfos, propositionElement)

    inputNom.value = ""
    inputPrenom.value = ""
    inputBiographie.value = ""
    inputNIveau.value = ""

});

// Sauvegarde des données du carte sur la bases de données 
btnSauvegarder.addEventListener("click", (event)=>{

    // on vide la page
   body.innerHTML = "" 
   // on creer un tutre
   const titre = document.createElement("h1")
   titre.innerText = "La liste des apprenants"
   body.appendChild(titre)

   const div = document.createElement("div")
   titre.appendChild(div)



   // on ajoute tout les élements du tableau dans la base de données
   tab.forEach((apprenant)=>{
         //ENVOYER LES DONNEES VERS SUPABASE
        fetch(API_URL, {
            method: "POST",
            headers: {
            apikey: API_KEY,
            "Content-Type": "application/json",
            Prefer: "return=representation",
            },
            body: JSON.stringify(apprenant),
        })
            .then((response) => response.json())
            .then((data) => {
            const ideeCreeAuNiveauAPI = data[0]
            console.log(ideeCreeAuNiveauAPI)
            //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE
            creerCarte(ideeCreeAuNiveauAPI, div)
            })

        })

    })
