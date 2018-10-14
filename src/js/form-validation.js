
(function () {

  // retrieve label text without '*:'
  function getFieldLabel(fieldID) {
    return document.querySelector(`[for="${fieldID}"]`).innerText.replace("*:", "");
  }

  // check if field is valid and detect which rule does it break
  // construct and error msg accordignly
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

  // validate each field
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

  // display validation error in html
  function showError(fieldID, error) {

    let row = document.getElementById(fieldID+"-row"),
        errorMsg = document.createElement("div");
    errorMsg.innerText = error;
    row.className = "form__row error";
    row.insertBefore(errorMsg, document.getElementById(fieldID));
  }

  // remove all errors from html
  function cleanupErrors() {
    var t = document.querySelectorAll(".form__row");
    t.forEach((row) => {
      row.className = "form__row";
    });
  }

  // start form validation each time submit is clicked
  document.getElementById("form").addEventListener("submit", function(e){
    cleanupErrors();
    const results = validateForm();
    if (!results.isValid) {
      e.preventDefault();
      for (let field in results.fields) {
        if (results.fields.hasOwnProperty(field)) {
          if (!results.fields[field].isValid)
            showError(field, results.fields[field].error);
        }
      }
    }

  });

}());
