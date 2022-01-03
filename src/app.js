const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMyMTM3NCwiZXhwIjoxOTU1ODk3Mzc0fQ.4OG4cncqE_T0C_IQfAqDkvJz66PpQXP-NPxF7_joiKQ"
const API_URL = "https://qrhfvjqerilazypfxbcu.supabase.co/rest/v1/infos"

import { creerCarte } from './carte.js';
import { creerApprenants } from './apprenants.js';

// Recuperation des élément du formulaire
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputNIveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")
const photo = document.querySelector("#photo")
const btnAjouter = document.querySelector("#btn-ajouter")

const propositionElement = document.querySelector("#list-apprenants")
const btnSauvegarder = document.querySelector("#btn-sauvegarder")
const lister = document.querySelector("#listes")
const principal = document.querySelector("main")
const input = document.querySelector("input")


//Tableau pour stocker les cartes
export let tab = [] 


// VERIFICATION DES MOTS SAISIS
inputBiographie.addEventListener("input", (event) => {
  const longueurMax = 130
  const contenuSaisi = inputBiographie.value
  const longueurSaisi = contenuSaisi.length
  const reste = longueurMax - longueurSaisi

  //actualiser le dom pour afficher le nombre
  const paragraphCompteur = document.getElementById("limite-text")
  const compteurText = document.getElementById("text-progress")
  const restantText = document.getElementById("text-restant")
  const btnSuggestion = document.getElementById("btn-ajouter")
  compteurText.textContent = longueurSaisi
  restantText.textContent = " Il vous reste " + reste

  //changer couleur

  if (reste < 0) {
    paragraphCompteur.style.color = "#ce0033"
    btnSuggestion.disabled = true
  } else if (reste <= 16) {
    paragraphCompteur.style.color = "yellow"
    btnSuggestion.disabled = false
  } else {
    paragraphCompteur.style.color = "#00000"
    btnSuggestion.disabled = false
  }
})

input.addEventListener("click",()=>{

  const inputNomSaisi = inputNom.value
  const inputPrenomSaisi = inputPrenom.value
  const inputBiographieSaisi = inputBiographie.value
  const inputNIveauSaisi = inputNIveau.value
  const nouvelle = {
    nom : inputNomSaisi ,
    prenom : inputPrenomSaisi,
    niveau: inputNIveauSaisi,
    biographie : inputBiographieSaisi,
  }
  localStorage.setItem("nouvelle", JSON.stringify(nouvelle))
  const local = JSON.parse(localStorage.getItem("nouvelle"));

  inputNom.value = local.nom
  inputPrenom.value = local.prenom
  inputBiographie.value = local.biographie
  inputNIveau.value = local.niveau
})

// On n'ecoute l'événment sur le formulaire
btnAjouter.addEventListener("click", (event)=> {
    event.preventDefault()

    let indice
    // Récupération des valeurs saisies du formulaire
    const inputNomSaisi = inputNom.value
    const inputPrenomSaisi = inputPrenom.value
    const inputBiographieSaisi = inputBiographie.value
    const inputNIveauSaisi = inputNIveau.value
    
    // Vérificaation des informations du formulaire

    if(inputNomSaisi.trim().length < 4){
        alert("Tapez un nom valide.");
        inputNom.classList.add("invalid")
        inputNom.focus();
        return
       }else if(inputPrenomSaisi.trim().length < 4){
        alert("Donner un prénnom correcte")
        inputPrenom.classList.add("invalid")
        inputPrenom.focus()
        return
       }else if (inputNIveauSaisi.trim().length < 3){
         alert("Veillez choisir le niveau de l'apprenant")
         return
       }else if(inputBiographieSaisi.trim().length < 8){
        alert("Merci de saisir des informations ")
        inputBiographie.focus()
        inputBiographie.classList.add("invalid")
        return
       }else if (photo.files.length == 0){
        alert("Veillez choisir une image")
        return
       }else{
          // On recupére le nom de l'image 
          const image = photo.files[0].name
          // Création de l'element à mettre dans la carte
          const nouvelleInfos = {
            nom : inputNomSaisi ,
            prenom : inputPrenomSaisi,
            niveau: inputNIveauSaisi,
            biographie : inputBiographieSaisi,
            photo : image, 
          }

          // Ajout de l'element dans le tableau 
          tab.push(nouvelleInfos)
          indice = tab.indexOf(nouvelleInfos)
          console.log(indice)

          console.log(tab)
           
          // Appel de la fonction pour creer une nouvelle carte
          creerCarte(nouvelleInfos, propositionElement, indice)

          document.getElementById("form").reset()
    }
    localStorage.clear();
});


// Sauvegarde des données du carte sur la bases de données 
btnSauvegarder.addEventListener("click", (event)=>{
   event.preventDefault()
    // on vide la page
   principal.innerHTML = "" 
   // on creer un tutre
   const titre = document.createElement("h3")
   titre.classList.add("p-5")
   titre.innerText = "La liste des apprenants"
   principal.appendChild(titre)

   const div = document.createElement("div")

   div.classList.add("m-5")
   div.style.flexWrap = "wrap"
   div.classList.add("d-flex")

   titre.appendChild(div)

   // on ajoute tout les élements du tableau dans la base de données
   tab.forEach((apprenant)=>{
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
            creerApprenants(ideeCreeAuNiveauAPI, div)
            })

        })

        // on affiche tout les élément de la base de données
            fetch(API_URL, {
              headers: {
                apikey: API_KEY,
              },
            })
              .then((response) => response.json())
              .then((infos) => {
                infos.forEach((info) => {
                  creerApprenants(info, div) 
                })
              })

    })

    lister.addEventListener("click", (event)=>{
      event.preventDefault()
      // on vide la page
     principal.innerHTML = "" 
     // on creer un tutre
     const titre = document.createElement("h3")
     titre.classList.add("p-5")
     titre.innerText = "La liste des apprenants"
     principal.appendChild(titre)
  
     const div = document.createElement("div")
  
     div.classList.add("m-5")
     div.style.flexWrap = "wrap"
     div.classList.add("d-flex")
  
     titre.appendChild(div)
  
      fetch(API_URL, {
        headers: {
          apikey: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((infos) => {
          infos.forEach((info) => {
            creerApprenants(info, div) 
          })
        })
    })
   
   