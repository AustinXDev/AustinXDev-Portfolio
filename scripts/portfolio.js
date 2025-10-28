import { clock } from "./utils/clock.js";


clock();


const darkBTN = document.getElementById('darkMode');
const body = document.body;
const icon = document.getElementById('modeIcon');

darkBTN.addEventListener('click', () => {
  body.classList.toggle('dark-mode')

  icon.src = body.classList.contains('dark-mode') ? 'images/brightness.png' : 'images/night-mode.png';
  icon.title = body.classList.contains('dark-mode') ? 'Brightness' : 'Dark Mode';
})