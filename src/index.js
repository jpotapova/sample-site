import './scss/index.scss';

/* NAVIGATION - open and close ---------------------------------------------- */

(function () {

  const app = document.getElementById("app"),
        navOpen = document.getElementById("nav-open"),
        navClose = document.getElementById("nav-close"),
        mq = window.matchMedia("(min-width: 60rem)"); // FIXME - get variable from scss

  function showNav() {
    app.className = "app viewnav";
  }

  function hideNav() {
    app.className = "app";
  }

  function processMQ() {
    if (mq.matches) {
      // wide screen
      // remove all click handlers and make sure viewnav class is removed
      app.className = "app";
      navOpen.removeEventListener("click", showNav);
      navClose.removeEventListener("click", hideNav);
    }
    else {
      // narrow screen
      // show-hide nav on corresponding button click
      navOpen.addEventListener("click", showNav);
      navClose.addEventListener("click", hideNav);
    }
  }

  try {
    // initial load
    processMQ();
    // screen size changed after load
    mq.addListener(function(e){
        processMQ();
    });
  }
  catch(err) {}

}());
