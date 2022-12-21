const displayForm = _("displayForm");
const forAdmin = _("forAdmin");
const adminForm = _("adminForm");
const forClient = _("forClient");
const clientForm = _("clientForm");
const formContainer = _("formContainer");

displayForm.addEventListener("click", showForm);



forAdmin.addEventListener("click", () => {
  forAdmin.classList.add("active");
  forClient.classList.remove("active");
  
  if (adminForm.classList.contains("toggleForm")) {
    formContainer.style.transform = "translate(0%)";
    formContainer.style.transition = "transform .5s";
    clientForm.classList.add("toggleForm");
    adminForm.classList.remove("toggleForm");
    
    
  }
});

forClient.addEventListener("click", () => {
  forAdmin.classList.remove("active");
  forClient.classList.add("active");
  if (clientForm.classList.contains("toggleForm")) {
    formContainer.style.transform = "translate(-100%)";
    formContainer.style.transition = "transform .5s";
    clientForm.classList.remove("toggleForm");
    adminForm.classList.add("toggleForm");
  }
});

function _(e) {
  return document.getElementById(e);
}

function showForm() {
  document.querySelector(".formWrapper .card").classList.toggle("show");
}

e=true;
function changer(){
  if(e){
    document.getElementById("passAdmin").setAttribute("type", "text");
    document.getElementById("eyeAdmin").src="assets/oeil.png";
    e=false;
  }
  else{
    document.getElementById("passAdmin").setAttribute("type", "password");
    document.getElementById("eyeAdmin").src="assets/oeilbarre.png";
    e=true;

  }
}

e=true;
function changerconfirm(){
  if(e){
    document.getElementById("passAdminConfirm").setAttribute("type", "text");
    document.getElementById("eyeAdminConfirm").src="assets/oeil.png";
    e=false;
  }
  else{
    document.getElementById("passAdminConfirm").setAttribute("type", "password");
    document.getElementById("eyeAdminConfirm").src="assets/oeilbarre.png";
    e=true;

  }
}


e=true;
function changerclient(){
  if(e){
    document.getElementById("passClient").setAttribute("type", "text");
    document.getElementById("eyeClient").src="assets/oeil.png";
    e=false;
  }
  else{
    document.getElementById("passClient").setAttribute("type", "password");
    document.getElementById("eyeClient").src="assets/oeilbarre.png";
    e=true;

  }
}

e=true;
function changerclientconfirm(){
  if(e){
    document.getElementById("passClientConfirm").setAttribute("type", "text");
    document.getElementById("eyeClientConfirm").src="assets/oeil.png";
    e=false;
  }
  else{
    document.getElementById("passClientConfirm").setAttribute("type", "password");
    document.getElementById("eyeClientConfirm").src="assets/oeilbarre.png";
    e=true;

  }
}



const ul = document.querySelector(".nav-inner ul");
navItems = document.querySelectorAll(".nav-inner ul li a");
sections = document.querySelectorAll("section");
document.addEventListener("scroll", (event) => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  navItems.forEach((li) => {
    li.classList.remove("active");
    li.getAttribute("href") === `#${current}` && li.classList.add("active");
  });
  console.log(current);
});

const button = document.querySelector(".menu");
button.addEventListener("click", () => {
  button.classList.toggle("active");
  ul.classList.toggle("active");
});

console.log(window);
document.getElementById("title")
title.innerText()
title.innerHtml()
let paragraphe = getElementsByTagName('p');
console.log(paragraphe[0].innerText);