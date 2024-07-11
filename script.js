const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
const navLinks = document.querySelectorAll('.nav__links a'); 

menuBtn.addEventListener("click", () => {
  document.querySelector('.nav__links').classList.toggle("open"); 
  
  const isOpen = document.querySelector('.nav__links').classList.contains("open"); 
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
    document.querySelector('.nav__links').classList.remove("open"); 
    menuBtnIcon.setAttribute("class", "ri-menu-line"); 
  });
});

const headerImage = document.querySelector(".header__image");
headerImage.addEventListener("animationend", () => {
  headerImage.classList.add("reveal");
}, { once: true });

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header__content div", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".header .nav__links", {
  delay: 4500,
});
