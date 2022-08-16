/*
    Purpose:
            Add an EventListener to the feedback form buttons on the About.html page
            Clicking will open the feedback form modal 
*/
// Create variables for the feedback form buttons, the modal background, and the modal itself
const feedbackButton = document.querySelector('.btn-feedback');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');


// Add an onClick listener to feedback button

    feedbackButton.addEventListener('click', (e) => {
        // Display the feedbackform Modal
        modal.classList.add('is-active');

    })
;


// Add an onClick Listener for the dark part of the modal
// This will make the modal disappear
modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});
