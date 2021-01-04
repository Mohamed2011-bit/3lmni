var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var http = new XMLHttpRequest;
var url = "JSON.json";
http.open("GET", url, true)
http.setRequestHeader("content-type", usersData)
http.send();
var usersData = [];
// console.log(usersData)


http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        usersData = JSON.parse(http.response);
        // console.log(usersData)
        return;
    }
}

function login() {
    // var usersData = JSON.parse(http.response);
// console.log(usersData)
    for (let i = 0; i < usersData.length; i++) {
        if (inputUsername.value == usersData[i].username && inputPassword.value == usersData[i].password) {
            // console.log("You are in");
            alert("You Are Logged In");
            localStorage.setItem("token",inputPassword.value+5668+"564")
            window.location.replace("../../index.html");
            return
        }
    }
    alert("Wrong User Name Or Password")
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
else if (page.includes("registration") == true || page.includes("Registration") == true ) {
  document.getElementById('register').setAttribute("class", "active")
}
else if (page.includes("login") == true || page.includes("Login") == true ) {
  document.getElementById('signIn').setAttribute("class", "active")
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


