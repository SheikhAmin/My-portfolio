function popUp(id) {
  if (id === "signup") {
    var closeButton = document.getElementsByClassName("sClose")[0];
    const signUpButton = document.getElementById(id);
    const sLoginModel = document.getElementById("sLoginModal");

    // Open the modal when the login/sign up button is clicked
    signUpButton.addEventListener("click", function () {
      sLoginModel.style.display = "block";
    });

    // Close the modal when the close button or outside the modal is clicked
    closeButton.addEventListener("click", function () {
      sLoginModel.style.display = "none";
    });

    //telling if click happen anywhere on display the pop up will close
    window.addEventListener("click", function (event) {
      if (event.target === sLoginModel) {
        sLoginModel.style.display = "none";
      }
    });
  }
  if (id === "login") {
    const closeButton = document.getElementsByClassName("close")[0];
    const loginButtonTop = document.getElementById(id);
    const loginModel = document.getElementById("loginModal");

    // Open the modal when the login/sign up button is clicked
    loginButtonTop.addEventListener("click", function () {
      loginModel.style.display = "block";
    });

    // Close the modal when the close button or outside the modal is clicked
    closeButton.addEventListener("click", function () {
      loginModel.style.display = "none";
    });

    //telling if click happen anywhere on display the pop up will close
    window.addEventListener("click", function (event) {
      if (event.target === loginModel) {
        loginModel.style.display = "none";
      }
    });
  }
}
