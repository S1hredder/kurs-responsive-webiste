const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
// slider
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
