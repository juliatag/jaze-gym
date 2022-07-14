const signupButtons = document.querySelectorAll('.btn-signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupButtons.forEach(signupButton => {
    signupButton.addEventListener('click', () => {
        modal.classList.add('is-active');
    })
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});