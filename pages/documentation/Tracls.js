autosurvay()

function intro() {
	if (confirm("You will be redirected to Curriculum")) {
		window.open("https://www.linkedin.com/learning/paths/become-a-software-developer?trk=lilblog_06-30-20_msft-announcement-reskilling-linkedin-learning_learning&fbclid=IwAR3WosHRF--vt27Rmin39VIifmTqbMtW5r9rhDpuq_3kN6WavS0uP2WZyS8")
	}
}

function b1() {
	if (confirm("You will be redirected to Curriculum")) {
		window.open("https://www.freecodecamp.org/")
	}
}

function b2() {
	if (confirm("You will be redirected to Curriculum")) {
		window.open("https://www.theodinproject.com/tracks")
	}
}

function b3() {
	if (confirm("You will be redirected to Curriculum")) {
		window.open("https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd0044")
	}
}

function IT1() {
	if (confirm("You will be redirected to Curriculum")) {
		window.open("https://www.linkedin.com/learning/paths/prepare-for-comptia-network-plus-n10-007-certification?trk=lilblog_06-30-20_msft-announcement-reskilling-linkedin-learning_learning&fbclid=IwAR2t6BvoA4zfP7BmX14HWlvi7pud138xvcHWVfooLSrHNyPkvlxWjDvI_7w")
	}
}

function IT2() {
	if (confirm("You will be redirected to Curriculum")) {
		window.open("https://www.linkedin.com/learning/paths/prepare-for-the-comptia-a-plus-certification-220-1001-and-220-1002?trk=lilblog_06-30-20_msft-announcement-reskilling-linkedin-learning_learning&fbclid=IwAR21D1pUODRlq-kET2-E_EUZodE0NsGo4zucHTtg1v2tT91XW440W2VXHiI")
	}
}

function graphic() {
	if (confirm("You will be redirected to Curriculum")) {
		window.open("https://www.coursera.org/specializations/graphic-design")
	}
}

function swipe() {
	var largeImage = document.getElementById('largeImage');
	largeImage.style.display = 'block';
	var url = largeImage.getAttribute('src');
	window.open("IT.jpg", 'Image', 'width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}




// open survay page after 5 min
function autosurvay() {
	setTimeout(() => window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"), 300000);
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
else if (page.includes("About") == true) {
	document.getElementById('about').setAttribute("class", "active")
}
else if (page.includes("Tracks") == true) {
	document.getElementById('tracks').setAttribute("class", "active")
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