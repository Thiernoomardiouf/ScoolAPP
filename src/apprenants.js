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
          principal.insertAdjacentHTML(
            "afterend",
              `<div class= "m-5">
                  <div class="progress h-100">
                     <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 20%; height: 30px; font-size: 15px" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> Créer une base de données </div>
                  </div>
                  <br>
                  <div class="progress h-100">
                    <div class="progress-bar progress-bar-striped bg-secondary" role="progressbar" style="width: 28%; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer la partie back-end d’une application web ou web mobile </div>
                  </div>
                  <br>
                  <div class="progress h-100 ">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 30%; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer les composants d’accès aux données </div>
                  </div>
                  <br>
                  <div class="progress h-100">
                    <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style="width: 43%; height: 30px; font-size: 15px" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce </div>
                  </div>
                  <br>
                  <div class="progress h-100">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 50%; height: 30px; font-size: 15px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> Réaliser une interface utilisateur avec une solution de gestion de contenu ou e- commerce </div>
                  </div>
                  <br>
                  <div class="progress h-100">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 70%; height: 30px; font-size: 15px" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> Développer une interface utilisateur web dynamique </div>
                  </div>
                  <br>
                  <div class="progress h-100">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 85%; height: 30px; font-size: 15px" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> Réaliser une interface utilisateur web statique et adaptable </div>
                  </div>
                  <br>
                  <div class="progress h-100">
                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%; height: 30px; font-size: 15px" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> Maquetter une application </div>
                  </div>
              </div>
          `
          )


      })

}