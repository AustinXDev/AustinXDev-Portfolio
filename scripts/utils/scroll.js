
export function scrollPage() {
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const clock = document.getElementById('clock');

    if(window.scrollY > 50) {
      navbar.classList.add("scrolled");
      clock.style.color = '#04e2ffff', clock.style.fontWeight = 'normal';
    }
    else{
      navbar.classList.remove("scrolled");
      clock.style.color = 'none', clock.style.fontWeight = 'normal';
    }
  });
}