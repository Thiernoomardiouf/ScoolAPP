// Recuperation des élément du formulaire
/* const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputNIveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie") */

const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMyMTM3NCwiZXhwIjoxOTU1ODk3Mzc0fQ.4OG4cncqE_T0C_IQfAqDkvJz66PpQXP-NPxF7_joiKQ"
const API_URL = "https://qrhfvjqerilazypfxbcu.supabase.co/rest/v1/infos"
const principal = document.querySelector("main")

export function creerApprenants(infos, position){
    const idButtonDetails = "btn_datails-" + infos.id
    const idCard = "btn-card-" + infos.id
 
    position.insertAdjacentHTML(
        "beforeend",
        `
        <div id =${idCard}>
        <div class="card mb-3 m-2" style="max-width: 1000px; max-height: 230px; border-radius: 15px;" >
        <div class="row g-0">
          <div class="col-md-4">
          <img src="src/image/moi.png" class="img-fluid rounded-start w-100" alt="..." style="width: 100px; height: 200px; border-radius: 5px;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${infos.prenom}   ${infos.nom}</h5>
              <p class="card-text">${infos.biographie}.</p>
              <p class="card-text" style="color: green"><small class="text-muted">${infos.niveau}</small></p>
              <a href="#" class="card-link" id=${idButtonDetails}>Détails</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      `
      )
      
      // Récuperation des bouttons modifier et supprimer
      const bouttonDetails = document.getElementById(idButtonDetails)
      const idCarde = document.getElementById(idCard) 
     
      bouttonDetails.addEventListener("click", (event)=>{
          event.preventDefault();
          
      // on vide la page
      principal.innerHTML = "" 
      // on creer un tutre
      const titre = document.createElement("h3")
      titre.innerText = "Voici la description detailé de l'apprenant "
      principal.appendChild(titre)

      const div = document.createElement("div")
      titre.appendChild(div)
      div.classList.add("text-center")
      div.classList.add("m-5")

      const h = document.createElement("h5")
      const p = document.createElement("p")
      

      })

}