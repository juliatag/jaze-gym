'use strict';
let elements =document.querySelectorAll('#signup-form input', '#signup-form select');



elements.forEach(el => {
    addValidationEventListeners (el);
})

function addValidationEventListeners (el){
    el.addEventListener('invalid', onInvalid);
    el.addEventListener('input', onInput);
    if (el.id === 'email-confirm' || el.id === 'email') {
        el.addEventListener('input', () => confirmEmail('email','email-confirm'));
    } else if (el.id === 'dob') {
       
        let max = `${(new Date()).getFullYear() - 14}-01-01`;
        el.setAttribute('max', max);
    }else if(el.id === 'clear_form'){
        el.addEventListener('click',clearErrorStyles);

    }
}

/**
 * 
 * @param {Event} e 
 */
function onInvalid(e) {
    let element = e.currentTarget;
    let type = element.getAttribute('type');
    switch (type) {
        case 'email':
            if(!element.validity.customError) {
                element.setCustomValidity('Please enter a valid email');
            }
            break;
        case 'date':
            element.setCustomValidity('Please enter a valid date');
            break;
        default:
            element.setCustomValidity('This field is required');
            break;
    }
    element.classList.add('error');
}

function onInput(e) {
    let currentTarget = e.currentTarget;
    if (currentTarget.value.length > 0) {
        currentTarget.setCustomValidity('');
        currentTarget.classList.remove('error');
    }
}

function confirmEmail(emailID, confirmationID) {
    const email = document.getElementById(emailID);
    const confirmation = document.getElementById(confirmationID);
    if (email.value != confirmation.value) {
        confirmation.classList.add('error');
        confirmation.setCustomValidity('Email must match');
    } else {
        confirmation.setCustomValidity('');
        confirmation.classList.remove('error');
    }
}

function clearErrorStyles(){
    elements.forEach(el => el.classList.remove('error'));
}