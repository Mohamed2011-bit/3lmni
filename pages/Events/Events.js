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
else if (page.includes("Events") == true || page.includes("events") == true ) {
  document.getElementById('events').setAttribute("class", "active")
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