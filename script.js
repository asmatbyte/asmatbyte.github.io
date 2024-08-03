// script.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("main > section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  setActiveLink(); // Set initial active link on load

  window.addEventListener("scroll", setActiveLink);
});
