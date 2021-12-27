const principal = document.querySelector("main")

export function pogressBarre(nb1, nb2, nb3, nb4, nb5, nb6, nb7, nb8){

    principal.insertAdjacentHTML(
        "afterend",
          `<div class= "m-5">
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${nb1}; height: 30px; font-size: 15px" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> Créer une base de données </div>
              </div>
              <br>
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped bg-secondary" role="progressbar" style="width: ${nb2}; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer la partie back-end d’une application web ou web mobile </div>
              </div>
              <br>
              <div class="progress h-100 ">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${nb3}; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer les composants d’accès aux données </div>
              </div>
              <br>
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style="width: ${nb4}; height: 30px; font-size: 15px" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"> Elaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce </div>
              </div>
              <br>
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${nb5}; height: 30px; font-size: 15px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> Réaliser une interface utilisateur avec une solution de gestion de contenu ou e- commerce </div>
              </div>
              <br>
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${nb6}; height: 30px; font-size: 15px" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> Développer une interface utilisateur web dynamique </div>
              </div>
              <br>
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${nb7}; height: 30px; font-size: 15px" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"> Réaliser une interface utilisateur web statique et adaptable </div>
              </div>
              <br>
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: ${nb8}; height: 30px; font-size: 15px" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"> Maquetter une application </div>
              </div>
          </div>
      `
  )
}