import { tab, inputNom, inputPrenom, inputNIveau, inputBiographie, photo, comp1, comp2, comp3, comp4 } from "./app"

export let i = 0

export function creerCarte(infos, position, ind){

    const idButtonModifier = "btn_valider-" + i
    const idButtonSupprimer = "btn_refuser-" + i
    const idCard = "btn-card" + i
    const idBiographie = "btn_biographie-" + i
    const idNiveau = "btn_niveau-" + i
    const idPrenom = "btn_prenom-" + i
    const idNom = "btn_nom-" + i
    const idImage = "btn_image-" + i
  
    //On recupére l'image
    const image = photo.files[0].name
    
    // On creer une carte pour chaque apprenants 
    position.insertAdjacentHTML(
        "beforeend",
        `
        <div id =${idCard}>
        <div class="card mb-3 m-2" style="max-width: 1000px; max-height: 230px; border-radius: 15px;" >
        <div class="row g-0">
          <div class="col-md-4"> 
          <img  id=${idImage} class="img-fluid rounded-start w-100" alt="..." style="height: 230px; border-radius: 5px;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"> <span id = ${idPrenom}> ${infos.prenom} </span> <span id = ${idNom}> ${infos.nom}  </span> </h5>
              <p class="card-text" id = ${idBiographie}>${infos.biographie}.</p>
              <p class="card-text" style="color: green"><small class="text-muted" id = ${idNiveau}>${infos.niveau}</small></p>
              <a href="#" class="card-link" id=${idButtonModifier}>Modifier</a>
              <a href="#" class="card-link" id=${idButtonSupprimer}>Supprimer</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      `
      )
       
      const inputImage = document.getElementById(idImage)
      var fReader = new FileReader();
      fReader.readAsDataURL(photo.files[0]);
      fReader.onloadend = function(event){
        inputImage.src = event.target.result;
      }
      
      // Récuperation des bouttons modifier et supprimer
      const bouttonModifier = document.getElementById(idButtonModifier)
      const bouttonSupprimer = document.getElementById(idButtonSupprimer)
      const idCarde = document.getElementById(idCard) 
      const nom = document.getElementById(idNom)
      const prenom = document.getElementById(idPrenom)
      const Biographie = document.getElementById(idBiographie)
      const Niveau = document.getElementById(idNiveau)
     
      bouttonModifier.addEventListener("click", (event)=>{
          event.preventDefault();

          // On recupére les valeurs de l'apprenant sur le formulaire
          inputNom.value = infos.nom
          inputPrenom.value = infos.prenom
          inputBiographie.value = infos.biographie
          inputNIveau.value = infos.niveau
          comp1.value = infos.maquette
          comp2.value = infos.back
          comp3.value = infos.statique
          comp4.value = infos.donnees
          
          // on creer un bouton pour modifier les nouvellles informations saisies
          const editButton = document.createElement("button");
          editButton.innerText = "Modifier"
          editButton.style.backgroundColor = "#CE0033"
          editButton.style.borderRadius = "5px"
          editButton.style.width = "90px"
          editButton.style.height = "50px"
          editButton.style.color = "white"
          document.querySelector("form").appendChild(editButton) 
          
          // on écoute le bouton modifier
          editButton.addEventListener("click", (event)=>{
              event.preventDefault()
              // on affiche sur la carte les nouvelles informations 
              nom.textContent = inputNom.value
              prenom.textContent = inputPrenom.value
              Biographie.textContent = inputBiographie.value
              Niveau.textContent = inputNIveau.value
              
              // On creer un nouveau element qui contient les modifications 
              const nouvelleInfos = {
                  nom : inputNom.value ,
                  prenom : inputPrenom.value,
                  niveau: inputNIveau.value,
                  biographie : inputBiographie.value,
                  photo : image, 
                  maquette: comp1.value,
                  back: comp2.value,
                  statique: comp3.value,
                  donnees: comp4.value,
                }

              // On remplace l'élément supprimer dans le tableau 
              tab.splice(ind, 1, nouvelleInfos);
              console.log(tab)

              // Aprés modification on supprime le bouton 
              editButton.remove(editButton)
              
              // on vide a nouveau le formulaire 
              document.getElementById("form").reset()

          })

      })

      bouttonSupprimer.addEventListener("click", (event)=>{
        event.preventDefault()
        idCarde.parentNode.removeChild(idCarde);
        // On supprime l'élément dans le tableau 
        tab.splice(ind, 1)
        console.log(tab)
        return false;
      })
   i = i + 1

}