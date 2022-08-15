/*
    Purpose: Add a footer to all pages
    - includes some info, social links and feedbackforms
    - includes validation for the forms
*/

//fetch the footer and appends it to the document
fetch("components/footer.html")
  .then((response) => response.text())
  .then((text) => (document.getElementById("footer").innerHTML = text))
  .then(getFeedbackModal);

function getFeedbackModal() {
  // Create variables for the feedback form buttons, the modal background, and the modal itself


  const feedbackBtn = document.querySelector("#feedbackBtn");
  const modalBg = document.querySelector(".modal-background");
  const modal = document.querySelector("#modal");

  // Add an onClick listener to Gym feedback button
  feedbackBtn.addEventListener("click", (e) => {
    // Display the feedbackform Modal
    modal.classList.add("is-active");
  });

  // Add an onClick Listener for the dark part of the modal
  // This will make the modal disappear
  modalBg.addEventListener("click", () => {
    modal.classList.remove("is-active");
  });
}
