const inputNom = document.querySelector("#nom")
const inputPrenom = document.querySelector("#prenom")
const inputNIveau = document.querySelector("#niveau")
const inputBiographie = document.querySelector("#biographie")
const btnAjouter = document.querySelector("#btn-ajouter")

document.forms[0].addEventListener("submit", function(evenement) { 
    const inputNom = document.querySelector("#nom").value
    const inputPrenom = document.querySelector("#prenom").value
    const inputBiographie = document.querySelector("#biographie").value
    if ((document.getElementById("nom").value == "") && (inputNom.lenght < 3)) {
        evenement.preventDefault();
        alert("Tapez un nom valide.");
        document.getElementById("nom").focus();
    }
    else if ((document.getElementById("prenom").value == "") && (inputPrenom.lenght < 3)) {
        evenement.preventDefault();
        alert("Pensez à taper un prenom !");
        document.getElementById("prenom").focus();
    } else if (document.getElementById("niveau").value == ""){
        evenement.preventDefault();
        alert("Veillez choisir un nievau!");
    }else if ((document.getElementById("biographie").value == "") && (inputBiographie.lenght < 6)){
        evenement.preventDefault();
        alert("Donner votre biographie !");
    }
});