export function navbarMobile() {
  const navMobileHtml = `
    <div class="logo">
      <span class="hamburger-icon js-navbar-btn-mobile "><i class="fa fa-bars"></i></span>
      <span class="dev-name-logo">💻 AustinDev.</span>
    </div>

    <nav class="nav-links-mobile">

      <a href="">Home</a>
      <a href="#about-me">About me</a>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>

    </nav>
  `;

  document.getElementById('navbar-mobile').innerHTML = navMobileHtml;
}