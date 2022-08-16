'use strict';
let elements =document.querySelectorAll('#feedback-form input', '#feedback-form select');



elements.forEach(el => {
    addValidationEventListeners (el);
})

function addValidationEventListeners (el){
    el.addEventListener('invalid', onInvalid);
    el.addEventListener('input', onInput);
   if (el.id === 'clear_form'){
        el.addEventListener('click',clearErrorStyles);
    }
}

/**
 * 
 * @param {Event} e 
 */
function onInvalid(e) {
    let element = e.currentTarget;
        element.setCustomValidity('This field is required');
        element.classList.add('error');
}

function onInput(e) {
    let currentTarget = e.currentTarget;
    if (currentTarget.value.length > 0) {
        currentTarget.setCustomValidity('');
        currentTarget.classList.remove('error');
    }
}


function clearErrorStyles(){
    elements.forEach(el => el.classList.remove('error'));
}