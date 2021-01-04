/* To maje background color of nav bar changing while scrolling */
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.backgroundColor = "rgba(153, 0, 0,.5)";
  } else {
    document.getElementById("nav").style.backgroundColor = "rgba(153, 0, 0,1)";
  }
}



//to make anchor on nav bar activ 

var nav = document.getElementsByClassName('notActive');
var page = window.location.href;

if (page.includes("index") == true|| page.includes("") == true) {
  document.getElementById('home').setAttribute("class", "active")
}
else if (page.includes("About") == true) {
  document.getElementById('about').setAttribute("class", "active")
}

// to change navbar if loginindex
var signIn = document.getElementById('signIn');
var signUp = document.getElementById('signUp');


if (localStorage.getItem("token")!= null)
{
  console.log("Hello from local")
  loggedInUser()
  signIn.addEventListener("click" , function(){
    localStorage.removeItem("token");
    
    })
}else{
  signUp.innerHTML="Sign Up";
  signIn.style.display="block";
}

function loggedInUser ()
  {
    signUp.style.display="none";
    signIn.innerHTML="Log out";
    
  }





//==========================================

//to send email from contact us
var inputs = document.getElementsByClassName('form-control')
var mail = document.getElementById('mailBody');
var username = document.getElementById('username');
var email = document.getElementById('email');
var number = document.getElementById('number');
var submit = document.getElementById('submit');

var usernameAlert = document.querySelector(".usernameAlert")
var emailAlert = document.querySelector(".emailAlert")
var phoneAlert = document.querySelector(".phoneAlert")
var messageAlert = document.querySelector(".messageAlert")

// console.log(mail.value)

function sendEmail() {

  Email.send({
    Host: "smtp.gmail.com",
    Username: "almniproject@gmail.com",
    Password: "@almni123",
    To: 'almniproject@gmail.com',
    From: "almniproject@gmail.com",
    Subject: "Contact Us",
    Body: ` name : ${username.value} <br>
           mobile number : ${number.value}<br>
          email : ${email.value}<br>
          message : ${mail.value}`,

  }).then(
    message => alert("mail sent successfully")
  );
}

function clearForm() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = " ";
  }
}


function sendNow() {
  sendEmail()
  clearForm()
}


// validation 

username.addEventListener("keyup", function () {
  var nameRejex = /^[a-z]{3,}$/
  if (nameRejex.test(username.value) == false) {
    usernameAlert.style.display = "block";
    username.classList.add("is-invalid")
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
number.addEventListener("keyup", function () {
  var nameRejex = /^(01)(0|1|2)[0-9]{8}$/
  if (nameRejex.test(number.value) == false) {
    phoneAlert.style.display = "block";
    number.classList.add("is-invalid")
  }
  else {
    phoneAlert.style.display = "none";
    number.classList.add("is-valid")
    submitCheck()
  }

})

function submitCheck() {
  if (username.classList.contains("is-valid") && email.classList.contains("is-valid") && number.classList.contains("is-valid")) {
    submit.removeAttribute("disabled")
  }
}



// sign up

// var http = new XMLHttpRequest;
// var url = "db.json";
// http.open("GET" , url ,true)
// http.setRequestHeader("content-type","application/json")
// http.send();



http.onreadystatechange =  function(){

  if (http.readyState == 4 && http.status == 200)
  {
    var login = http;
    console.log(login)
        
  }
}
