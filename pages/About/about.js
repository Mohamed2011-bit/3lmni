//navigation bar active 
// function active()
// {
//     var links=document.getElementById('list').getElementsByTagName("a");
//     var current = location.href;
//     for (var i=0; i < links.length; i++)
//         {
//         if(links[i].href == current)
//         {
//             links[i].className='seccolor';}
//         }
// }
// open survay page after 5 min
// function autosurvay()
// {
//     setTimeout(() => window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"), 300000);
// }


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
else if (page.includes("About") == true || page.includes("about") == true  ) {
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