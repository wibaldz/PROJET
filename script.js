const displayForm = _("displayForm");
const forAdmin = _("forAdmin");
const formAdmin = _("formAdmin");
const forClient = _("forClient");
const formClient = ("formClient");
const formContainer = ("formContainer");
displayForm.addEventListener("click", showForm);



forAdmin.addEventListener("click", () => {
  forAdmin.classList.add("active");
  forClient.classList.remove("active");
  if (formAdmin.classList.contains("toggleForm")) {
    formContainer.style.transform = ("translate(0%)");
    formContainer.style.transition = ("transform .5s");
    formClient.classList.add("toggleForm");
    formAdmin.classList.remove("toggleForm");
  }
});

forClient.addEventListener("click", () => {
  forAdmin.classList.remove("active");
  forClient.classList.add("active");
  if (formClient.classList.contains("toggleForm")) {
    formContainer.style.transform = ("translate(-100%)");
    formContainer.style.transition = ("transform .5s");
    formClient.classList.remove("toggleForm");
    formAdmin.classList.add("toggleForm");
  }
});

function _(e) {
  return document.getElementById(e);
}

function showForm() {
  document.querySelector(".form-wrapper .card").classList.toggle("show");
}

const forClientButton = document.querySelector("#forClient");
const form = document.querySelector(".toggleForm");
forClientButton.addEventListener("click", function () {
  form2.classList.remove("active");

  form.classList.toggle("active");
});
const forAdmintButton = document.querySelector("#forAdmin");
const form2 = document.querySelector("#formAdmin");
forAdmintButton.addEventListener("click", function () {
  form.classList.remove("active");
  form2.classList.toggle("active");
});