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

const slider = tns({
  container: ".my-slider",
  preventScrollOnTouch: "auto",
  navPosition: "bottom",
  controls: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayButtonOutput: false,
  slideBy: "page",
  center: true,
  items: 1,
  mouseDrag: true,
  // responsive: {
  //   900: {
  //     items: 3,
  //     speed: 200,
  //     gutter: 30,
  //     nav: false,
  //   },
  //   600: {
  //     items: 2,
  //     gutter: 30,
  //     nav: false,
  //   },
  // },
});

const tnsNav = document.querySelector(".tns-nav").childNodes;
tnsNav[0].classList.add("button-special-slider");
// automatic change button slier after time
// let info = "";
// let displayIndex = 0;

// const changeButtonSlider = () => {
//   // console.log(document.querySelector(".tns-slide-active"));
//   info = slider.getInfo();
//   displayIndex = info.displayIndex;
//   console.log(displayIndex);
//   document
//     .querySelector(".button-special-slider")
//     .classList.remove("button-special-slider");
//   tnsNav[displayIndex - 1].classList.add("button-special-slider");
// };

// let changeButtonSliderAuto = setInterval(changeButtonSlider, 3050);
// const sliderCard = document.querySelectorAll(".slider-card");
// sliderCard.forEach((element) => {
//   element.addEventListener("mousedown", () => {
//     console.log("test");
//     clearInterval(changeButtonSliderAuto);
//     element.addEventListener("mouseup", () => {
//       changeButtonSliderAuto = setInterval(changeButtonSlider, 3050);
//     });
//   });
// });
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

let count = 0;
const customizedFunction = (info, eventName) => {
  count++;
  console.log(info.displayIndex);
  const displayIndex = info.displayIndex;
  document
    .querySelector(".button-special-slider")
    .classList.remove("button-special-slider");
  tnsNav[displayIndex - 1].classList.add("button-special-slider");
};

slider.events.on("indexChanged", customizedFunction);
