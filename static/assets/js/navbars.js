// navbar 1
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('nav-links-1')[0];

toggleButton.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");
});
