

function validateForm() {


    let selectPlan = document.getElementById('selectplan');
    let firstName = document.getElementById('fn');
    let lastName = document.getElementById('ln');



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




}

let submitButton = document.getElementById('submit');
submitButton.addEventListener("click", validateForm)