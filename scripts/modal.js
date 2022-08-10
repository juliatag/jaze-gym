/*
    Purpose:
            Add an EventListener to the signup buttons on the Plans.html page
            Clicking will open the sign-up modal with the right Plan selected
*/
// Create variables for the signUp buttons, the Modal background, and the modal itself
const signupButtons = document.querySelectorAll('.btn-signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');

// Add an onClick listener to each signUp button
signupButtons.forEach(signupButton => {
    signupButton.addEventListener('click', (e) => {
        // Display the signup Modal
        modal.classList.add('is-active');

        // var for the plan Select option
        let selectPlan = modal.querySelector('#selectplan');
        // Select the proper plan
        if(e.currentTarget.id === 'btnMoms') {
            selectPlan.value = 'moms';
        } else if(e.currentTarget.id === 'btnStandard'){
            selectPlan.value = 'standard';
        }
    })
});

// Add an onClick Listener for the dark part of the modal
// This will make the modal disappear
modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

buttonPlus.addEventListener('click', () => {
    const table = document.getElementById('childrenTable');
    
    // add row and tabledata
    let newRow = table.insertRow();
    //name 
    let newCell1= newRow.insertCell();

    var childName = document.createElement("input");
    childName.type= "text"
    childName.value = "";
    childName.placeholder = "insert child's name";
    childName.required = "required";

    //age
    let newCell2 = newRow.insertCell();

    var childAge = document.createElement("input");
    childAge.type= "number"
    childAge.value = "Insert child's age";
    childAge.required = "required";
    childAge.placeholder = 'age';
    childAge.min = '0';
    childAge.max = '10';
    
    
    newCell1.appendChild(childName);
    newCell2.appendChild(childAge);
  }); // end function


  buttonMinus.addEventListener('click', () => { 
     const table = document.getElementById('childrenTable');
     const rowCount = table.rows.length;
     if (rowCount != 0)
     table.deleteRow(rowCount - 1);    
});
