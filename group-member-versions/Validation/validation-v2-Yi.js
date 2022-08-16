/*  version : 2
    authour: Yi
*/


function validateForm() {
    return (validatePlan() &&
        validateFirtsName() &&
        validateLastName() &&
        validateEmail() &&
        validateEmailConfirmation() &&
        validateBirthday() &&
        validateAddress() &&
        validateCity() &&
        validatePostalCode() &&
        validateProvince());
}
function validatePlan() {
    let selectPlan = document.getElementById('selectplan');
    if (selectPlan.selectedIndex === 0) {
        window.alert('Please select a plan');
        selectPlan.focus();
        return false;
    } else
        return true;
}

function validateFirtsName() {
    let firstName = document.getElementById('fn');
    if (firstName.value.length === 0) {
        // alert('Please Enter your first name')
        firstName.addEventListener('invalid', (e) => {
            firstName.setCustomValidity('TEST');
            firstName.style.border =
        })
        firstName.focus();
        return false;
    } else
        return true;
}
function validateLastName() {
    let lastName = document.getElementById('ln');
    if (lastName.value.length === 0) {
        alert('Please Enter your last name')
        lastName.focus();
        return false;
    } else
        return true;
}
function validateEmail() {
    var emailField = document.getElementById("email").value;
    var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

    if (!(emailField.match(emailCorrectPattern))) {
        alert("Please correct email address");
        emailField.focus();
        return false;
    } else
        return true;

}
function validateEmailConfirmation() {
    var confirmEmail = document.getElementById('email-confirm');

    if (targetField != confirmEmail) {
        alert("Please correct second email address");
        confirmEmail.focus();
        return false;
    } else
        return true;
}
function validateBirthday() {
    let dateOfBirth = document.getElementById('dob');
    if (dateOfBirth.value.length === 0) {
        alert('Please select your date of birth')
        dateOfBirth.focus();
        return false;
    } else
        return true;
}
function validateAddress() {
    let addressField = document.getElementById('address');
    if (addressField.value.length === 0) {
        alert('Please enter your address')
        addressField.focus();
        return false;
    } else
        return true;
}
function validateCity() {
    let city = document.getElementById('city');
    if (city.value.length === 0) {
        alert('Please enter your city')
        city.focus();
        return false;
    }
}
function validatePostalCode() {
    var postalCode = document.getElementById('postalcode');
    var postalCodeCorrectPattern = /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/;
    if (!(postalCode.match(postalCodeCorrectPattern))) {
        alert("Please correct postal code");
        postalCode.focus();
        return false;
    } else
        return true;
}
function validateProvince() {
    let province = document.getElementById('province');
    if (province.value.length === 0) {
        alert('Please enter your province')
        province.focus();
        return false;
    } else
        return true;
}

let submitButton = document.getElementById('submit');
submitButton.addEventListener("click", validateForm)

