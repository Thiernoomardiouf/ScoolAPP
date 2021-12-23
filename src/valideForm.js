export function valider(){ 
    //Récuperation des valeurs du formulaire
    const inputNom = document.querySelector("#nom")
    const inputPrenom = document.querySelector("#prenom")
    const inputBiographie = document.querySelector("#biographie")
    const inputNIveau = document.querySelector("#niveau")

    const inputNomSaisi = inputNom.value
    const inputPrenomSaisi = inputPrenom.value
    const inputBiographieSaisi = inputBiographie.value

    if (inputNomSaisi.trim().length < 3) {
        //event.preventDefault();
        alert("Tapez un nom valide.");
        inputNom.focus();
        return false;
    }
    if (inputPrenomSaisi.trim().length < 3) {
        //event.preventDefault();
        alert("Pensez à taper un prenom !");
        inputPrenom.focus();
        return false;
    } 
    if (inputNIveau.value == ""){
        //event.preventDefault();
        alert("Veillez choisir un nievau!");
        return false;
    }
    if (inputBiographieSaisi.trim().length < 6){
        //event.preventDefault();
        alert("Donner votre biographie !");
        inputBiographie.focus();
        return false;
    }
  }