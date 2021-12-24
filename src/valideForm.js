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
        //event.preventDefault();
        alert("Tapez un nom valide.");
        inputNom.focus();
    }
    if (inputPrenomSaisi.trim().length < 2) {
        //event.preventDefault();
        alert("Pensez à taper un prenom !");
        inputPrenom.focus();
    } 
    if (inputNIveau.value == ""){
        //event.preventDefault();
        alert("Veillez choisir un nievau!");
    }
    if (inputBiographieSaisi.trim().length < 3){
        //event.preventDefault();
        alert("Donner votre biographie !");
        inputBiographie.focus();
    }
  }