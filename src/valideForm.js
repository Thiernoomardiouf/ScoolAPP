export function valider(){ 
    //Récuperation des valeurs du formulaire
    const inputNom = document.querySelector("#nom")
    const inputPrenom = document.querySelector("#prenom")
    const inputBiographie = document.querySelector("#biographie")
    const inputNIveau = document.querySelector("#niveau")

    const inputNomSaisi = inputNom.value
    const inputPrenomSaisi = inputPrenom.value
    const inputBiographieSaisi = inputBiographie.value

    if (inputNomSaisi.trim().length < 2) {
        inputNom.classList.add("invalid")
        alert("Tapez un nom valide.");
        inputNom.focus();
      return
     }
    if (inputPrenomSaisi.trim().length < 2){
             //event.preventDefault();
             inputPrenom.classList.add("invalid")
             alert("Pensez à taper un prenom !");
             inputPrenom.focus();
         return
    } 
    if (inputBiographieSaisi.trim().length < 5){
              inputBiographie.classList.add("invalid")
              alert("Donner votre biographie !");
              inputBiographie.focus();
        return
    }
    
  }