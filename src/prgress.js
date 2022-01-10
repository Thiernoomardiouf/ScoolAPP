const principal = document.querySelector("main");

export function pogressBarre(nb1, nb2, nb3, nb4) {
  principal.insertAdjacentHTML(
    "afterend",
    `<div class= "m-5">
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${nb1}%; height: 30px; font-size: 15px" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"> Maquettage une application </div>
              </div>
              <br>
              <div class="progress h-100">
                <div class="progress-bar progress-bar-striped " role="progressbar" style="width: ${nb2}%; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer la partie back-end d’une application web et mobile </div>
              </div>
              <br>
              <div class="progress h-100 ">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${nb3}%; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer une interface statique </div>
              </div>
              <br>
              <div class="progress h-100 ">
                <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${nb4}%; height: 30px; font-size: 15px" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"> Développer une interface statique </div>
              </div>
          </div>
      `
  );
}

