/*
    Purpose:
            Add an EventListener to the signup buttons on the Plans.html page
            Clicking will open the sign-up modal with the right Plan selected
*/
// Create variables for the signUp buttons, the Modal background, and the modal itself
const signupButtons = document.querySelectorAll('.btn-signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

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