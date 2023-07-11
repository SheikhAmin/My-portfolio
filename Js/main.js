const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    //clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const loginButtonTop = document.getElementById("login");
const closeButton = document.getElementsByClassName("close")[0];
const loginModel = document.getElementById("loginModal");

// Open the modal when the login button is clicked
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

function popUp(id) {
  const closeButton = document.getElementsByClassName("close")[0];
  if (id === "signup") {
    const signUpButton = document.getElementById(id);
    const sLoginModel = document.getElementById('sLoginModal');

    // Open the modal when the login/sign up button is clicked
    signUpButton.addEventListener('click',function(){
      sLoginModel.style.display = 'block';
    });

   // Close the modal when the close button or outside the modal is clicked
   closeButton.addEventListener('click',function(){
    sLoginModel.style.display = 'none';
   });

    //telling if click happen anywhere on display the pop up will close
  window.addEventListener("click", function (event) {
    if (event.target === loginModel) {
      sLoginModel.style.display = "none";
    }
  });
  

  }
  if (id === "login") {
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
