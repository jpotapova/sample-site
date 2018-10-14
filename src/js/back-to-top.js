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
