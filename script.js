//navToggle gets pinged if the query in .nav-toggle is selected (pressed in other words)
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// activates when the nav button is clicked
navToggle.addEventListener("click", () => {
  //toggles nav-open when the nav button is clicked
  document.body.classList.toggle("nav-open");
});

// always removes the nav menu when a linked is clicked on
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
