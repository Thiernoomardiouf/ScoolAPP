import { valider } from './valideForm.js';

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

});

function creerCarte(infos){
    const propositionElement = document.querySelector("#list-apprenants")
    propositionElement.insertAdjacentHTML(
        "beforebegin",
        `
        <div class="card mb-3 m-2" style="max-width: 440px; max-height: 200px">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${infos.prenom}   ${infos.nom}</h5>
              <p class="card-text">${infos.bio}.</p>
              <p class="card-text"><small class="text-muted">${infos.niveau}</small></p>
            </div>
          </div>
        </div>
      </div>
      `
      )

}