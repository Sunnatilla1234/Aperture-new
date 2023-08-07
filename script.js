const navAnim = () => {
  const button = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav__list");
  const navLinks = document.querySelectorAll("nav__list li");

  // toggle
  button.addEventListener("click", () => {
    nav.classList.toggle("nav__active");

    //  Animate Item

    navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = ''
    }else{
        link.style.animation = `navLinkMove 0.5s ease forwards ${
            index / 7 + 0.35}s`;
    }
    });

    // Animated Burger

    button.classList.toggle('toggle')

  });
};
navAnim();
