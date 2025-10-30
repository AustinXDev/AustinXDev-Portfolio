import { clock } from "./utils/clock.js";
import { scrollPage } from "./utils/scroll.js";
import {navbarMobile} from "./utils/navMobile.js";
import { sendMail } from "./utils/email.js";


document.addEventListener("DOMContentLoaded", () => {
  clock();
  scrollPage();
  navbarMobile();
  sendMail();

  const form = document.getElementById("contact-form");
  form.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
      event.preventDefault();
      form.requestSubmit(); 
    }
  });

  
  const desktopBtn = document.querySelector(".js-navbar-btn");
  const mobileBtn = document.querySelector(".js-navbar-btn-mobile");
  const navMobile = document.getElementById("navbar-mobile");
  const navDesktop = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-links-mobile a");
  const overlay = document.querySelector(".overlay");


  desktopBtn.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    navDesktop.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  mobileBtn.addEventListener("click", () => {
    navMobile.classList.remove("active");
    navDesktop.classList.toggle("active");
    overlay.classList.remove("active");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("active");
      navDesktop.classList.toggle("active");
      overlay.classList.remove("active");
    });
  });


});

/*
const darkBTN = document.getElementById('darkMode');
const body = document.body;
const icon = document.getElementById('modeIcon');

darkBTN.addEventListener('click', () => {
  body.classList.toggle('dark-mode')

  icon.src = body.classList.contains('dark-mode') ? 'images/brightness.png' : 'images/night-mode.png';
  icon.title = body.classList.contains('dark-mode') ? 'Brightness' : 'Dark Mode';
});
*/
