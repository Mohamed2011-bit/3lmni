  
  // Validation 

  var username = document.getElementById("name");
  var email = document.getElementById('email');
  var password = document.getElementById('psw');
  var repassword = document.getElementById('psw-repeat');
  var submit = document.getElementById('submit');

  var usernameAlert = document.querySelector(".usernameAlert")
  var emailAlert = document.querySelector(".emailAlert")
  var passAlert = document.querySelector(".passAlert")


  username.addEventListener("keyup", function () {
    var nameRejex = /^[a-z]{3,}$/
    if (nameRejex.test(username.value) == false) {
      usernameAlert.style.display = "block";
      username.classList.add("is-invalid");
    }
    else {
      usernameAlert.style.display = "none";
      username.classList.add("is-valid")
      submitCheck()
    }
  })


  email.addEventListener("keyup", function () {
    var nameRejex = /^[a-zA-Z]{1,10}?[0-9]*\@[a-z]{3,7}\.com$/
    if (nameRejex.test(email.value) == false) {
      emailAlert.style.display = "block";
      email.classList.add("is-invalid")
    }
    else {
        emailAlert.style.display = "none";
        email.classList.add("is-valid")
        submitCheck()
  
    }
  })

  repassword.addEventListener("keyup", function () {
    if (password.value!=repassword.value)
    {
      passAlert.style.display = "block";
      password.classList.add("is-invalid")
    }
    else{
      passAlert.style.display = "none";
      password.classList.add("is-valid")
      submitCheck()
    }
  })
  
  function submitCheck() {
    if (username.classList.contains("is-valid") && email.classList.contains("is-valid") && password.classList.contains("is-valid")) {
      submit.removeAttribute("disabled")
    }
  }

  