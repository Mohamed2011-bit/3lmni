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

if (page.includes("index") == true) {
  document.getElementById('home').setAttribute("class", "active")
}
else if (page.includes("Survey") == true) {
  document.getElementById('survey').setAttribute("class", "active")
}

function storage(){
    localStorage.name = document.getElementById("n").value
    localStorage.email = document.getElementById("e").value
    localStorage.age = document.getElementById("a1").value
    localStorage.gender = document.getElementById("cars").value
    localStorage.role = document.getElementById("cars1").value
    localStorage.site = document.getElementById("rec0").value
    localStorage.recommend = document.getElementById("rec").value
    localStorage.opinion = document.getElementById("rec1").value
    localStorage.comment = document.getElementById("ar").value
    alert("Thanks For Your Time")
    window.location.replace("../../index.html");

}
function printStorage(){
    console.log(localStorage.name)
    console.log(localStorage.email)
    console.log(localStorage.age)
    console.log(localStorage.gender)
    console.log(localStorage.role)
    console.log(localStorage.site)
    console.log(localStorage.recommend)
    console.log(localStorage.opinion)
    console.log(localStorage.comment)
}


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

if (page.includes("index") == true) {
  document.getElementById('home').setAttribute("class", "active")
}
else if (page.includes("Survey") == true) {
  document.getElementById('survey').setAttribute("class", "active")
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

