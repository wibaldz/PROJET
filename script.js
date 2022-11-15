const displayForm = _("displayForm");
const forAdmin = _('forAdmin');
const formAdmin = _('formAdmin');
const forClient = _('forClient');
const formClient = ('formClient');
const formContainer = ('formContainer');
displayForm.addEventListener('click', showForm);


forAdmin.addEventListener('click', () => {
    forAdmin.classList.add('active');
    forClient.classList.remove('active');
    if (formAdmin.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(0%)';
        formContainer.style.transition = 'transform .5s';
        formClient.classList.add('toggleForm');
        formAdmin.classList.remove('toggleForm');


    }
})


forClient.addEventListener('click', () => {

    forAdmin.classList.remove('active');
    forClient.classList.add('active');
    if (formClient.classList.contains('toggleForm')) {
        formContainer.style.transform = 'translate(-100%)';
        formContainer.style.transition = 'transform .5s';
        formClient.classList.remove('toggleForm');
        formAdmin.classList.add('toggleForm');


    }


})



function _(e) {
    return document.getElementById(e);
}

function showForm() {
    document.querySelector('.form-wrapper .card').classList.toggle('show');

}