/*
    1. Gets html for header
    2. Applies conditional styling depending on the current page
    3. Adds mobile menu functionality
    5. Inserts the header in the page
*/
  fetch("header.html")
    .then((response) => response.text())
    .then((text) => (document.getElementById("header").innerHTML = text))
    .then(makeActive)
    .then(addMobileMenu)
    .then(window.scrollTo(0, 0));


function makeActive() {
  let header = document.getElementById("header");
  let pages = header.classList;

  for (let page of pages) {
    let activeLink = document.getElementById(page);
      activeLink.classList.add(
        "has-background-primary",
        "has-text-weight-bold"
      );
  }
}

function addMobileMenu() {
  // Get mobile menu button and add event listener
  const navBtn = document.querySelector(".navbar-burger");
  navBtn.addEventListener("click", () => toggleMenu(navBtn));
}

function toggleMenu(navBtn) {
  // Get the target ellement from the "data-target" attribute
  const target = navBtn.dataset.target;
  const mobileMenu = document.getElementById(target);

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  navBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
}
