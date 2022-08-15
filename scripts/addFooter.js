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

  const siteFeedBtn = document.querySelector("#siteFeedbackBtn");
  const gymFeedBtn = document.querySelector("#gymFeedbackBtn");
  const modalBgs = document.querySelectorAll(".modal-background");
  const modalGym = document.querySelector("#modalGym");
  const modalSite = document.querySelector("#modalSite");

 // console.log(siteFeedBtn, gymFeedBtn, modalBgs, modalGym, modalSite);

  // Add an onClick listener to Gym feedback button
  gymFeedBtn.addEventListener("click", (e) => {
    // Display the feedbackform Modal
    modalGym.classList.add("is-active");
  });

  // Add an onClick listener to Site feedback button
  siteFeedBtn.addEventListener("click", (e) => {
    // Display the feedbackform Modal
    modalSite.classList.add("is-active");
  });

  // Add an onClick Listener for the dark part of the modal
  // This will make the modal disappear
  modalBgs.forEach(bg => bg.addEventListener("click", () => {
    modalGym.classList.remove("is-active");
    modalSite.classList.remove("is-active");

  }));
}
