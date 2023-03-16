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
// const sliderCard = document.querySelectorAll(".slider-card");
// sliderCard.forEach((element) => {
//   element.addEventListener("mousedown", () => {
//     element.addEventListener("mousemove", () => {});
//   });
// });

// const slider = tns({
//   container: ".my-slider",
//   preventScrollOnTouch: "auto",
//   navPosition: "bottom",
//   controls: false,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   autoplayButtonOutput: false,
//   center: true,
//   items: 1,
//   mouseDrag: true,
//   responsive: {
//     900: {
//       items: 3,
//       speed: 200,
//       gutter: 30,
//       nav: false,
//     },
//     600: {
//       items: 2,
//       gutter: 30,
//       nav: false,
//     },
//   },
// });
const slider = tns({
  container: ".my-slider",
  items: 1,
  mouseDrag: true,
  slideBy: "page",
  swipeAngle: false,
  speed: 400,
  gutter: 30,
  controls: false,
  autoplay: true,
  navPosition: "bottom",
  controls: false,
  autoplayButtonOutput: false,
  preventScrollOnTouch: "force",
  responsive: {
    900: {
      items: 3,
      speed: 200,
      gutter: 30,
      nav: false,
    },
    600: {
      items: 2,
      gutter: 30,
      nav: false,
    },
  },
});
const tnsNav = document.querySelector(".tns-nav").childNodes;
tnsNav[0].classList.add("button-special-slider");
//change on click button slider
tnsNav.forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".button-special-slider")
      .classList.remove("button-special-slider");
    element.classList.add("button-special-slider");
    // console.log(element);
  });
});

const changeButtonColor = (info) => {
  // console.log(info.displayIndex);
  const displayIndex = info.displayIndex;
  document
    .querySelector(".button-special-slider")
    .classList.remove("button-special-slider");
  tnsNav[displayIndex - 1].classList.add("button-special-slider");
};

slider.events.on("indexChanged", changeButtonColor);
