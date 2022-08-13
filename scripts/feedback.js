const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-background');

document.getElementById('btn-feedback').addEventListener('click', showModal);
document.getElementById('btn-send').addEventListener('click', submitForm);
$('.hides-modal').on('click', hideModal);


function showModal() {
    modal.classList.add('is-active');
}

function hideModal() {
    modal.classList.remove('is-active');
}

function submitForm() {

}