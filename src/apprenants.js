
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
        <div class="card mb-3 m-2" style="width: 500px; max-height: 230px; border-radius: 15px;" >
        <div class="row g-0">
          <div class="col-md-4">
          <img src="src/image/moi.png" class="img-fluid rounded-start w-100 h-100" alt="..." style="border-radius: 5px;">
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
              <img src="src/image/moi.png" class="img-fluid rounded-start w-100 h-50" alt="..." style=" border-radius: 5px;">
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
          
          `
          )
          
          //On affiche la progression des compétences 

          if (infos.niveau == "Avancé"){

               pogressBarre("50%", "65%", "70%", "75%", "78%", "83%", "88%", "94%")
              
          }

          if (infos.niveau == "Trés Avancé"){

            pogressBarre("83%", "68%", "76%", "83%", "85%", "89%", "95%", "100%")
           
          }

          if (infos.niveau == "Intérmédiaire"){

            pogressBarre("33%", "58%", "38%", "48%", "55%", "69%", "75%", "85%")
           
          }

          if (infos.niveau == "Moyen"){

            pogressBarre("33%", "48%", "36%", "36%", "50%", "59%", "50%", "60%")
           
          }

          if (infos.niveau == "Débutant"){

            pogressBarre("23%", "28%", "30%", "30%", "45%", "50%", "45%", "40%")
           
          }

      })

}