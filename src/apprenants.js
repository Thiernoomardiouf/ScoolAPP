
const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMyMTM3NCwiZXhwIjoxOTU1ODk3Mzc0fQ.4OG4cncqE_T0C_IQfAqDkvJz66PpQXP-NPxF7_joiKQ"
const API_URL = "https://qrhfvjqerilazypfxbcu.supabase.co/rest/v1/infos"

import { pogressBarre } from "./prgress"

const principal = document.querySelector("main")

export function creerApprenants(infos, position){
    const idButtonDetails = "btn_datails-" + infos.id
    const idCard = "btn-card-" + infos.id
        
    position.insertAdjacentHTML(
        "beforeend",
        `
        <div id =${idCard}>
        <div class="card mb-3 m-2" style="width: 500px; height: 200px; border-radius: 15px;" >
        <div class="row g-0">
          <div class="col-md-4">
          <img src="src/image/${infos.photo}" class="img-fluid rounded-start w-100" alt="..." style="border-radius: 5px; height: 200px;">
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

          principal.insertAdjacentHTML(
            "beforeend",
            `
            <h2 class="text-center p-3"> Les détails de l'apprenant à voir ci-dessous </h2>
            <div class="card mb-3 m-5" style="max-width: 1500px; max-height: 280px; border-radius: 15px; border: none" >
            <div class="row g-0">
              <div class="col-md-4">
              <img src="src/image/${infos.photo}" class="img-fluid rounded-start w-100 h-100" alt="..." style=" border-radius: 5px; max-height: 280px;">
              </div>
              <div class="col-md-8 text-center my-2">
                <div class="card-body">
                  <h5 class="card-title" style="font-size: 50px; font-weight: bold">${infos.prenom}   ${infos.nom}</h5>
                  <p class="card-text" style="font-size: 30px;">${infos.biographie}.</p>
                  <p class="card-text" style=""><small class="text-muted bg-danger" style="font-size: 25px;">${infos.niveau}</small></p>
                </div>
              </div>
            </div>
          </div>
          
          <div class= "m-5">
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${infos.maquette}%; height: 30px; font-size: 15px" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> Maquettage une application </div>
              </div>
              <br>
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped " role="progressbar" style="width: ${infos.back}%; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer la partie back-end d’une application web et mobile </div>
              </div>
              <br>
              <div class="progress h-100 ">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${infos.statique}%; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer une interface statique </div>
              </div>
              <br>
              <div class="progress h-100 ">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${infos.donnees}%; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer une interface statique </div>
              </div>
          </div>
          `
          )

      })

}