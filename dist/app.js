/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tab\": () => (/* binding */ tab)\n/* harmony export */ });\n/* harmony import */ var _valideForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valideForm.js */ \"./src/valideForm.js\");\n/* harmony import */ var _carte_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carte.js */ \"./src/carte.js\");\n/* harmony import */ var _apprenants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apprenants.js */ \"./src/apprenants.js\");\nconst API_KEY =\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMyMTM3NCwiZXhwIjoxOTU1ODk3Mzc0fQ.4OG4cncqE_T0C_IQfAqDkvJz66PpQXP-NPxF7_joiKQ\"\nconst API_URL = \"https://qrhfvjqerilazypfxbcu.supabase.co/rest/v1/infos\"\n\n;\n\n\n\n// Recuperation des élément du formulaire\nconst inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputNIveau = document.querySelector(\"#niveau\")\nconst inputBiographie = document.querySelector(\"#biographie\")\nconst btnAjouter = document.querySelector(\"#btn-ajouter\")\n\nconst propositionElement = document.querySelector(\"#list-apprenants\")\nconst btnSauvegarder = document.querySelector(\"#btn-sauvegarder\")\nconst principal = document.querySelector(\"main\")\n\n//Tableau pour stocker les cartes\nlet tab = []\n\n// VERIFICATION DES MOTS SAISIS\ninputBiographie.addEventListener(\"input\", (event) => {\n  const longueurMax = 130\n  const contenuSaisi = inputBiographie.value\n  const longueurSaisi = contenuSaisi.length\n  const reste = longueurMax - longueurSaisi\n\n  //actualiser le dom pour afficher le nombre\n  const paragraphCompteur = document.getElementById(\"limite-text\")\n  const compteurText = document.getElementById(\"text-progress\")\n  const restantText = document.getElementById(\"text-restant\")\n  const btnSuggestion = document.getElementById(\"btn-ajouter\")\n  compteurText.textContent = longueurSaisi\n  restantText.textContent = \" Il vous reste \" + reste\n\n  //changer couleur\n\n  if (reste < 0) {\n    paragraphCompteur.style.color = \"#ce0033\"\n    btnSuggestion.disabled = true\n  } else if (reste <= 16) {\n    paragraphCompteur.style.color = \"yellow\"\n    btnSuggestion.disabled = false\n  } else {\n    paragraphCompteur.style.color = \"#00000\"\n    btnSuggestion.disabled = false\n  }\n})\n\n// On n'ecoute l'événment sur le formulaire\nbtnAjouter.addEventListener(\"click\", (event)=> {\n    event.preventDefault()\n\n    // Récupération des valeurs saisies du formulaire\n    const inputNomSaisi = inputNom.value\n    const inputPrenomSaisi = inputPrenom.value\n    const inputBiographieSaisi = inputBiographie.value\n    const inputNIveauSaisi = inputNIveau.value\n    \n    // Vérificaation des informations du formulaire\n    ;(0,_valideForm_js__WEBPACK_IMPORTED_MODULE_0__.valider)(); \n    \n    // Création de l'element à mettre dans la carte \n    const nouvelleInfos = {\n    nom : inputNomSaisi ,\n    prenom : inputPrenomSaisi,\n    niveau: inputNIveauSaisi,\n    biographie : inputBiographieSaisi,\n    }\n\n    tab.push(nouvelleInfos)\n\n    console.log(tab)\n    console.log(tab[0].nom)\n\n    \n    // Appel de la fonction pour creer une nouvelle carte\n    ;(0,_carte_js__WEBPACK_IMPORTED_MODULE_1__.creerCarte)(nouvelleInfos, propositionElement)\n\n    inputNom.value = \"\"\n    inputPrenom.value = \"\"\n    inputBiographie.value = \"\"\n    inputNIveau.value = \"\"\n  \n    \n\n});\n\n// Sauvegarde des données du carte sur la bases de données \nbtnSauvegarder.addEventListener(\"click\", (event)=>{\n\n    // on vide la page\n   principal.innerHTML = \"\" \n   // on creer un tutre\n   const titre = document.createElement(\"h3\")\n   titre.classList.add(\"p-5\")\n   titre.innerText = \"La liste des apprenants\"\n   principal.appendChild(titre)\n\n   const div = document.createElement(\"div\")\n\n   div.classList.add(\"m-5\")\n   div.style.flexWrap = \"wrap\"\n   div.classList.add(\"d-flex\")\n\n   titre.appendChild(div)\n\n\n\n   // on ajoute tout les élements du tableau dans la base de données\n   tab.forEach((apprenant)=>{\n        fetch(API_URL, {\n            method: \"POST\",\n            headers: {\n            apikey: API_KEY,\n            \"Content-Type\": \"application/json\",\n            Prefer: \"return=representation\",\n            },\n            body: JSON.stringify(apprenant),\n        })\n            .then((response) => response.json())\n            .then((data) => {\n            const ideeCreeAuNiveauAPI = data[0]\n            console.log(ideeCreeAuNiveauAPI)\n            //AJOUT DE LA NOUVELLE IDEE AU NIVEAU DE LA PAGE\n            ;(0,_apprenants_js__WEBPACK_IMPORTED_MODULE_2__.creerApprenants)(ideeCreeAuNiveauAPI, div)\n            })\n\n        })\n\n        // on affiche tout les élément de la base de données\n            fetch(API_URL, {\n              headers: {\n                apikey: API_KEY,\n              },\n            })\n              .then((response) => response.json())\n              .then((infos) => {\n                infos.forEach((info) => {\n                  ;(0,_apprenants_js__WEBPACK_IMPORTED_MODULE_2__.creerApprenants)(info, div) \n                })\n              })\n\n    })\n\n\n//# sourceURL=webpack://scoolapp/./src/app.js?");

/***/ }),

/***/ "./src/apprenants.js":
/*!***************************!*\
  !*** ./src/apprenants.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creerApprenants\": () => (/* binding */ creerApprenants)\n/* harmony export */ });\n// Recuperation des élément du formulaire\n/* const inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputNIveau = document.querySelector(\"#niveau\")\nconst inputBiographie = document.querySelector(\"#biographie\") */\n\nconst API_KEY =\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDMyMTM3NCwiZXhwIjoxOTU1ODk3Mzc0fQ.4OG4cncqE_T0C_IQfAqDkvJz66PpQXP-NPxF7_joiKQ\"\nconst API_URL = \"https://qrhfvjqerilazypfxbcu.supabase.co/rest/v1/infos\"\n\nconst principal = document.querySelector(\"main\")\n\nfunction creerApprenants(infos, position){\n    const idButtonDetails = \"btn_datails-\" + infos.id\n    const idCard = \"btn-card-\" + infos.id\n \n    position.insertAdjacentHTML(\n        \"beforeend\",\n        `\n        <div id =${idCard}>\n        <div class=\"card mb-3 m-2\" style=\"width: 500px; max-height: 230px; border-radius: 15px;\" >\n        <div class=\"row g-0\">\n          <div class=\"col-md-4\">\n          <img src=\"src/image/moi.png\" class=\"img-fluid rounded-start w-100\" alt=\"...\" style=\"width: 100px; height: 200px; border-radius: 5px;\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">${infos.prenom}   ${infos.nom}</h5>\n              <p class=\"card-text\">${infos.biographie}.</p>\n              <p class=\"card-text\" style=\"color: green\"><small class=\"text-muted\">${infos.niveau}</small></p>\n              <a href=\"#\" class=\"card-link\" id=${idButtonDetails}>Détails</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n      `\n      )\n      \n      // Récuperation des bouttons modifier et supprimer\n      const bouttonDetails = document.getElementById(idButtonDetails)\n      const idCarde = document.getElementById(idCard) \n     \n      bouttonDetails.addEventListener(\"click\", (event)=>{\n          event.preventDefault();\n          \n          // on vide la page\n          principal.innerHTML = \"\" \n\n          principal.insertAdjacentHTML(\n            \"beforeend\",\n            `\n            <h2 class=\"text-center p-5\"> Les détails de l'apprenant à voir ci-dessous </h2>\n\n            <div class=\"card mb-3 m-2\" style=\"max-width: 1500px; height: 400px; border-radius: 15px; border: none\" >\n            <div class=\"row g-0\">\n              <div class=\"col-md-4\">\n              <img src=\"src/image/moi.png\" class=\"img-fluid rounded-start w-100\" alt=\"...\" style=\"width: 100px; height: 400px; border-radius: 5px;\">\n              </div>\n              <div class=\"col-md-8 text-center my-2\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\" style=\"font-size: 50px; font-weight: bold\">${infos.prenom}   ${infos.nom}</h5>\n                  <p class=\"card-text\" style=\"font-size: 30px;\">${infos.biographie}.</p>\n                  <p class=\"card-text\" style=\"\"><small class=\"text-muted bg-danger\" style=\"font-size: 25px;\">${infos.niveau}</small></p>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n          \n          `\n          )\n          console.log(\"AAAA\")\n          \n          principal.insertAdjacentHTML(\n            \"afterend\",\n              `<div class= \"m-5\">\n                  <div class=\"progress h-100\">\n                     <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 20%; height: 30px; font-size: 15px\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Créer une base de données </div>\n                  </div>\n                  <br>\n                  <div class=\"progress h-100\">\n                    <div class=\"progress-bar progress-bar-striped bg-secondary\" role=\"progressbar\" style=\"width: 25%; height: 30px; font-size: 15px\" aria-valuenow=\"18\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Développer la partie back-end d’une application web ou web mobile </div>\n                  </div>\n                  <br>\n                  <div class=\"progress h-100 \">\n                    <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 30%; height: 30px; font-size: 15px\" aria-valuenow=\"18\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Développer les composants d’accès aux données </div>\n                  </div>\n                  <br>\n                  <div class=\"progress h-100\">\n                    <div class=\"progress-bar progress-bar-striped bg-dark\" role=\"progressbar\" style=\"width: 35%; height: 30px; font-size: 15px\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce </div>\n                  </div>\n                  <br>\n                  <div class=\"progress h-100\">\n                    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" style=\"width: 50%; height: 30px; font-size: 15px\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Réaliser une interface utilisateur avec une solution de gestion de contenu ou e- commerce </div>\n                  </div>\n                  <br>\n                  <div class=\"progress h-100\">\n                    <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" style=\"width: 70%; height: 30px; font-size: 15px\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Développer une interface utilisateur web dynamique </div>\n                  </div>\n                  <br>\n                  <div class=\"progress h-100\">\n                    <div class=\"progress-bar progress-bar-striped bg-warning\" role=\"progressbar\" style=\"width: 85%; height: 30px; font-size: 15px\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Réaliser une interface utilisateur web statique et adaptable </div>\n                  </div>\n                  <br>\n                  <div class=\"progress h-100\">\n                    <div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: 100%; height: 30px; font-size: 15px\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"> Maquetter une application </div>\n                  </div>\n              </div>\n          `\n          )\n\n\n      })\n\n}\n\n//# sourceURL=webpack://scoolapp/./src/apprenants.js?");

/***/ }),

/***/ "./src/carte.js":
/*!**********************!*\
  !*** ./src/carte.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"creerCarte\": () => (/* binding */ creerCarte)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n// Recuperation des élément du formulaire\nconst inputNom = document.querySelector(\"#nom\")\nconst inputPrenom = document.querySelector(\"#prenom\")\nconst inputNIveau = document.querySelector(\"#niveau\")\nconst inputBiographie = document.querySelector(\"#biographie\")\n\nfunction creerCarte(infos, position){\n    const idButtonModifier = \"btn_valider-\" + Math.random()\n    const idButtonSupprimer = \"btn_refuser-\" + Math.random()\n    const idCard = \"btn-card\" + Math.random()\n\n    position.insertAdjacentHTML(\n        \"beforeend\",\n        `\n        <div id =${idCard}>\n        <div class=\"card mb-3 m-2\" style=\"max-width: 1000px; max-height: 230px; border-radius: 15px;\" >\n        <div class=\"row g-0\">\n          <div class=\"col-md-4\">\n          <img src=\"src/image/moi.png\" class=\"img-fluid rounded-start w-100\" alt=\"...\" style=\"width: 100px; height: 200px; border-radius: 5px;\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">${infos.prenom}   ${infos.nom}</h5>\n              <p class=\"card-text\">${infos.biographie}.</p>\n              <p class=\"card-text\" style=\"color: green\"><small class=\"text-muted\">${infos.niveau}</small></p>\n              <a href=\"#\" class=\"card-link\" id=${idButtonModifier}>Modifier</a>\n              <a href=\"#\" class=\"card-link\" id=${idButtonSupprimer}>Supprimer</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n      `\n      )\n      \n      // Récuperation des bouttons modifier et supprimer\n      const bouttonModifier = document.getElementById(idButtonModifier)\n      const bouttonSupprimer = document.getElementById(idButtonSupprimer)\n      const idCarde = document.getElementById(idCard) \n     \n      bouttonModifier.addEventListener(\"click\", (event)=>{\n          event.preventDefault();\n          inputNom.value = infos.nom\n          inputPrenom.value = infos.prenom\n          inputBiographie.value = infos.biographie\n          inputNIveau.value = infos.niveau\n\n          const editButton = document.createElement(\"button\");\n          editButton.innerText = \"Modifier\"\n          document.querySelector(\"form\").appendChild(editButton)\n          \n          editButton.addEventListener(\"click\", (event)=>{\n            event.preventDefault()\n            infos.nom = inputNom.value\n            infos.prenom = inputPrenom.value\n            infos.bio = inputBiographie.value\n            infos.niveau = inputNIveau.value\n          })\n\n      })\n\n      bouttonSupprimer.addEventListener(\"click\", (event)=>{\n        event.preventDefault()\n        idCarde.parentNode.removeChild(idCarde);\n        _app__WEBPACK_IMPORTED_MODULE_0__.tab.splice()\n        return false;\n      })\n\n\n}\n\n//# sourceURL=webpack://scoolapp/./src/carte.js?");

/***/ }),

/***/ "./src/valideForm.js":
/*!***************************!*\
  !*** ./src/valideForm.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"valider\": () => (/* binding */ valider)\n/* harmony export */ });\nfunction valider(){ \n    //Récuperation des valeurs du formulaire\n    const inputNom = document.querySelector(\"#nom\")\n    const inputPrenom = document.querySelector(\"#prenom\")\n    const inputBiographie = document.querySelector(\"#biographie\")\n    const inputNIveau = document.querySelector(\"#niveau\")\n\n    const inputNomSaisi = inputNom.value\n    const inputPrenomSaisi = inputPrenom.value\n    const inputBiographieSaisi = inputBiographie.value\n\n    if (inputNomSaisi.trim().length < 2) {\n        //event.preventDefault();\n        alert(\"Tapez un nom valide.\");\n        inputNom.focus();\n    }\n    if (inputPrenomSaisi.trim().length < 2) {\n        //event.preventDefault();\n        alert(\"Pensez à taper un prenom !\");\n        inputPrenom.focus();\n    } \n    if (inputNIveau.value == \"\"){\n        //event.preventDefault();\n        alert(\"Veillez choisir un nievau!\");\n    }\n    if (inputBiographieSaisi.trim().length < 3){\n        //event.preventDefault();\n        alert(\"Donner votre biographie !\");\n        inputBiographie.focus();\n    }\n  }\n\n//# sourceURL=webpack://scoolapp/./src/valideForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;