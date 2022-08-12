'use strict';
let elements =document.querySelectorAll('#signup-form input', '#signup-form select');

elements.forEach(el => {
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
})

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


// function validateForm() {
//     return (validatePlan() &&
//         validateFirtsName() &&
//         validateLastName() &&
//         validateEmail() &&
//         validateEmailConfirmation() &&
//         validateBirthday() &&
//         validateAddress() &&
//         validateCity() &&
//         validatePostalCode() &&
//         validateProvince());
// }
// function validatePlan() {
//     let selectPlan = document.getElementById('selectplan');
//     if (selectPlan.selectedIndex === 0) {
//         window.alert('Please select a plan');
//         selectPlan.focus();
//         return false;
//     } else
//         return true;
// }

// function validateFirtsName() {
//     let firstName = document.getElementById('fn');
//     if (firstName.value.length === 0) {
//         // alert('Please Enter your first name')
//         firstName.addEventListener('invalid', (e) => {
//             firstName.setCustomValidity('TEST');
//             firstName.style.border =
//         })
//         firstName.focus();
//         return false;
//     } else
//         return true;
// }
// function validateLastName() {
//     let lastName = document.getElementById('ln');
//     if (lastName.value.length === 0) {
//         alert('Please Enter your last name')
//         lastName.focus();
//         return false;
//     } else
//         return true;
// }
// function validateEmail() {
//     var emailField = document.getElementById("email").value;
//     var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

//     if (!(emailField.match(emailCorrectPattern))) {
//         alert("Please correct email address");
//         emailField.focus();
//         return false;
//     } else
//         return true;

// }
// function validateEmailConfirmation() {
//     var confirmEmail = document.getElementById('email-confirm');

//     if (targetField != confirmEmail) {
//         alert("Please correct second email address");
//         confirmEmail.focus();
//         return false;
//     } else
//         return true;
// }
// function validateBirthday() {
//     let dateOfBirth = document.getElementById('dob');
//     if (dateOfBirth.value.length === 0) {
//         alert('Please select your date of birth')
//         dateOfBirth.focus();
//         return false;
//     } else
//         return true;
// }
// function validateAddress() {
//     let addressField = document.getElementById('address');
//     if (addressField.value.length === 0) {
//         alert('Please enter your address')
//         addressField.focus();
//         return false;
//     } else
//         return true;
// }
// function validateCity() {
//     let city = document.getElementById('city');
//     if (city.value.length === 0) {
//         alert('Please enter your city')
//         city.focus();
//         return false;
//     }
// }
// function validatePostalCode() {
//     var postalCode = document.getElementById('postalcode');
//     var postalCodeCorrectPattern = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/;
//     if (!(postalCode.match(postalCodeCorrectPattern))) {
//         alert("Please correct postal code");
//         postalCode.focus();
//         return false;
//     } else
//         return true;
// }
// function validateProvince() {
//     let province = document.getElementById('province');
//     if (province.value.length === 0) {
//         alert('Please enter your province')
//         province.focus();
//         return false;
//     } else
//         return true;
// }

/*
    let selectPlan = document.getElementById('selectplan');
    let firstName = document.getElementById('fn');
    let lastName = document.getElementById('ln');
    let dateOfBirth = document.getElementById('dob');
    let address = document.getElementById('address');
    let city = document.getElementById('city');
    let postalCode= document.getElementById('postalcode');
    let province = document.getElementById('province');



    if (selectPlan.selectedIndex === 0) {
        window.alert('Please select a plan');
        selectPlan.focus();
        return false;

    }

    if(firstName.value.length === 0){
        alert('Please Enter your first name')
        firstName.focus();
        return false;
    }

    if(lastName.value.length === 0){
        alert('Please Enter your last name')
        lastName.focus();
        return false;
    }


        // alert('here');
        var targetField = document.getElementById("email").value;
        var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

        if (!(targetField.match(emailCorrectPattern))) {
            alert("Please correct email address");
            // email.value = '';

            targetField.focus();

            // changes its background color to yellow
            targetField.style.backgroundColor = 'yellow';
            return false;
        }


        var confirmEmail = document.getElementById('email-confirm');


        if (targetField != confirmEmail) {
            alert("Please correct second email address");
            // email.value = '';

            targetField.focus();

            // changes its background color to yellow
            targetField.style.backgroundColor = 'yellow';
            return false;
        }

        if(dateOfBirth.value.length === 0){
            alert('Please select your date of birth')
            dateOfBirth.focus();
            return false;
        }
*/



// let submitButton = document.getElementById('submit');
// submitButton.addEventListener("click", validateForm)