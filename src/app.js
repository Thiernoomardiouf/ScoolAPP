import { valider } from './valideForm.js';

const SUPABASE_API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4OTQwNywiZXhwIjoxOTU1MTY1NDA3fQ.baE0cZZF2CpyzFYUVN8wqSycVkBv_rSe-pf75ZXV2Uk"
const SUPABASE_URL = "https://iwzfnnetuctxnxwbfqlc.supabase.co/rest/v1/infos"

// Recuperation des élément du formulaire
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputNIveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")
const btnAjouter = document.querySelector("#btn-ajouter")

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
    

    creerCarte(nouvelleInfos)

    inputNom.value = ""
    inputPrenom.value = ""
    inputBiographie.value = ""
    inputNIveau.value = ""

});

function creerCarte(infos){
    const idButtonModifier = "btn_valider-" + Math.random()
    const idButtonSupprimer = "btn_refuser-" + Math.random()

    const propositionElement = document.querySelector("#list-apprenants")
    propositionElement.insertAdjacentHTML(
        "beforebegin",
        `
        <div class="card mb-3 m-2" style="max-width: 440px; max-height: 200px" >
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${infos.prenom}   ${infos.nom}</h5>
              <p class="card-text">${infos.bio}.</p>
              <p class="card-text" style="color: green"><small class="text-muted">${infos.niveau}</small></p>
              <a href="#" class="card-link" id=${idButtonModifier}>Modifier</a>
              <a href="#" class="card-link" id=${idButtonSupprimer}>Supprimer</a>
            </div>
          </div>
        </div>
      </div>
      `
      )
      
      // Récuperation des bouttons modifier et supprimer
      const bouttonModifier = document.getElementById(idButtonModifier)
      const bouttonSupprimer = document.getElementById(idButtonSupprimer)
     
      bouttonModifier.addEventListener("click", (event)=>{
          alert("je verifie")
      })

      bouttonSupprimer.addEventListener("click", (event)=>{
          alert("Je supprime")
      })




}