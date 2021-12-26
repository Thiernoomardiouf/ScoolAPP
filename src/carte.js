import { tab} from "./app"
// Recuperation des élément du formulaire
const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputNIveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")

export function creerCarte(infos, position){
    const idButtonModifier = "btn_valider-" + Math.random()
    const idButtonSupprimer = "btn_refuser-" + Math.random()
    const idCard = "btn-card" + Math.random()

    position.insertAdjacentHTML(
        "beforeend",
        `
        <div id =${idCard}>
        <div class="card mb-3 m-2" style="max-width: 1000px; max-height: 230px; border-radius: 15px;" >
        <div class="row g-0">
          <div class="col-md-4">
          <img src="src/image/moi.png w-100 h-100" class="img-fluid rounded-start w-100" alt="..." style=" border-radius: 5px;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${infos.prenom}   ${infos.nom}</h5>
              <p class="card-text">${infos.biographie}.</p>
              <p class="card-text" style="color: green"><small class="text-muted">${infos.niveau}</small></p>
              <a href="#" class="card-link" id=${idButtonModifier}>Modifier</a>
              <a href="#" class="card-link" id=${idButtonSupprimer}>Supprimer</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      `
      )
      
      // Récuperation des bouttons modifier et supprimer
      const bouttonModifier = document.getElementById(idButtonModifier)
      const bouttonSupprimer = document.getElementById(idButtonSupprimer)
      const idCarde = document.getElementById(idCard) 
     
      bouttonModifier.addEventListener("click", (event)=>{
          event.preventDefault();
          inputNom.value = infos.nom
          inputPrenom.value = infos.prenom
          inputBiographie.value = infos.biographie
          inputNIveau.value = infos.niveau

          const editButton = document.createElement("button");
          editButton.innerText = "Modifier"
          document.querySelector("form").appendChild(editButton)
          
          editButton.addEventListener("click", (event)=>{
            event.preventDefault()
            infos.nom = inputNom.value
            infos.prenom = inputPrenom.value
            infos.bio = inputBiographie.value
            infos.niveau = inputNIveau.value
          })

      })

      bouttonSupprimer.addEventListener("click", (event)=>{
        event.preventDefault()
        idCarde.parentNode.removeChild(idCarde);
        tab.splice()
        return false;
      })


}