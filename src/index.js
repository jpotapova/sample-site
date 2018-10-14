/* NAVIGATION --------------------------------------------------------------- */

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
    mq.addListener(function(){
        processMQ();
    });
  }
  catch(err) {}

}());

/* BACK-TO-TOP -------------------------------------------------------------- */

(function () {

  const toTop = document.getElementById("to-top");

  function toggleButton() {
    if (window.pageYOffset || document.documentElement.scrollTop > 100) {
      toTop.className = "button button--totop";
    } else {
      toTop.className = "button button--totop hide";
    }
  }

  toggleButton();
  window.addEventListener("scroll", toggleButton);

}());

/* FORM VALIDATION ---------------------------------------------------------- */

(function () {

  function getFieldLabel(fieldID) {
    return document.querySelector(`[for="${fieldID}"]`).innerText.replace("*:", "");
  }

  function validateField(fieldID) {

    let error = "",
        isValid = true,
        field = document.getElementById(fieldID);

    if (field.value === "") {
      isValid = false;
      error = `Please fill in the ${getFieldLabel(fieldID)} field`;
    } else if (field.value.length < 3) {
      isValid = false;
      error = `${getFieldLabel(fieldID)} field should be at least 3 characters long`;
    }

    return {
      isValid,
      error
    };

  }

  function validateForm() {

    let results = {
      "fields": {
        "name": validateField("name"),
        "lastname": validateField("lastname"),
        "message": validateField("message")
      }
    };
    let fields = results.fields;
    results.isValid = fields.name.isValid && fields.lastname.isValid && fields.message.isValid;
    return results;

  }

  function showError(fieldID, error) {
    let row = document.getElementById(fieldID+"-row"),
        errorMsg = document.createElement("div");
    errorMsg.innerText = error;
    row.className = "form__row error";
    row.insertBefore(errorMsg, document.getElementById(fieldID));
  }

  document.getElementById("form").addEventListener("submit", function(e){
    // fixme - cleanup errors
    const results = validateForm();
    if (!results.isValid) {
      e.preventDefault();
      for (let field in results.fields) {
        if (results.fields.hasOwnProperty(field)) {
          showError(field, results.fields[field].error);
        }
      }
    }

  });

}());
