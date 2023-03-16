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

// const slider = tns({
//   container: ".my-slider",
//   items: 1,
//   slideBy: "page",
//   mouseDrag: true,
//   swipeAngle: false,
//   speed: 150,
//   center: true,
//   nav: false,
//   navPosition: "bottom",
//   controls: false,
//   responsive: {
//     600: {
//       items: 2,
//     },
//     800: {
//       items: 3,
//     },
//   },
// });
const slider = tns({
  container: ".my-slider",
  items: 3,
  // center: true,
  // loop: true,
  swipeAngle: false,
  speed: 800,
  gutter: 30,
  mouseDrag: true,
  preventScrollOnTouch: "auto",
  center: true,
  animateDelay: true,
});
