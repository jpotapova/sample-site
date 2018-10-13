import './scss/index.scss';


(function () {

  const app = document.getElementById("app");

  document.getElementById("nav-open").addEventListener("click", function( event ) {
    app.className = "app viewnav";
  }, false);

  document.getElementById("nav-close").addEventListener("click", function( event ) {
    app.className = "app";
  }, false);

}());
