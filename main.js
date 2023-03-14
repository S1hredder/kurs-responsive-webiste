const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("arial-expanded", false)
    : navToggle.setAttribute("arial-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = tns({
  container: ".my-slider",
  items: 2,
  slideBy: "page",
  mouseDrag: true,
  swipeAngle: false,
  speed: 400,
});
