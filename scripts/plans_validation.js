

function validateForm() {
    validatePlan(); 
    validateFirtsName(); 
    validateLastName(); 
    validateEmail(); 
    validateEmailConfirmation(); 
    validateBirthday(); 
    validateAddress(); 
    validateCity(); 
    validatePostalCode(); 
    validateProvince(); 
}
function validatePlan() { 
    let selectPlan = document.getElementById('selectplan');
    if (selectPlan.selectedIndex === 0) {
        window.alert('Please select a plan');
        selectPlan.focus();
        return false;
    }
}
    
function validateFirtsName() {
    let firstName = document.getElementById('fn');  
    if(firstName.value.length === 0){
        alert('Please Enter your first name')
        firstName.focus();
        return false;
    }
}
function validateLastName() {
    let lastName = document.getElementById('ln'); 
    if(lastName.value.length === 0){
        alert('Please Enter your last name')
        lastName.focus();
        return false;
    }
}
function validateEmail() {
    var emailField = document.getElementById("email").value; 
    var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
      
        if (!(emailField.match(emailCorrectPattern))) {
            alert("Please correct email address");
            emailField.focus();
            return false;
        }
        
}
function validateEmailConfirmation() {
    var confirmEmail = document.getElementById('email-confirm');
 
    if (targetField != confirmEmail) {
        alert("Please correct second email address");
        confirmEmail.focus();
        return false;
    } 
}
function validateBirthday() {
    let dateOfBirth = document.getElementById('dob'); 
    if(dateOfBirth.value.length === 0){
        alert('Please select your date of birth')
        dateOfBirth.focus();
        return false;
    }
}
function validateAddress() {
    let addressField = document.getElementById('address');
    if (addressField.value.length === 0) {
        alert('Please enter your address')
        addressField.focus();
        return false;
    }
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
        }
}
    function validateProvince() {
    let province = document.getElementById('province');
    if (province.value.length === 0) {
        alert('Please enter your province')
        province.focus();
        return false;
    }
}

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



    let submitButton = document.getElementById('submit');
    submitButton.addEventListener("click", validateForm)