// function for get DOM element
const get = (target) => {
  const elem = document.querySelector(target);
  return elem;
};

const $logo = get(".main-logo");
const $toggle = get(".toggle");
const $light = get(".fa-sun");
const $dark = get(".fa-moon");

const moveToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const changeMode = () => {
  document.body.classList.toggle("dark");
  if (document.body.className === "dark") {
    $light.classList.add("hidden");
    $dark.classList.remove("hidden");
  } else {
    $dark.classList.add("hidden");
    $light.classList.remove("hidden");
  }
};

const fadeIn = () => {
  $mainDesc.classList.add(".fade-in");
};

$logo.addEventListener("click", moveToTop);
$toggle.addEventListener("click", changeMode);

new Swiper(".project .swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlide: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".project .swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".project .swiper .swiper-button-prev",
    nextEl: ".project .swiper .swiper-button-next",
  },
});

const $scrollEls = document.querySelectorAll(".scroll-wrap");

$scrollEls.forEach((scrollEl) => {
  new ScrollMagic
    .Scene({ triggerElement: scrollEl, triggerHook: 0.8 })
    .setClassToggle(scrollEl, "show")
    .addTo(new ScrollMagic.Controller());
});
