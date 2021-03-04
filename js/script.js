const address_button = document.querySelector(".address-button");
const modal_closure = document.querySelector(".modal-closure");
const modal_feedback = document.querySelector(".modal--feedback");
const slider_bullit = document.querySelectorAll(".slider-pager-link");
const sort_button = document.querySelectorAll(".sort-type-main-link");
const sort_direction = document.querySelectorAll(".sort-type-direction-link");

address_button.addEventListener("click", function (e) {
  e.preventDefault();
  modal_feedback.classList.add("modal--show");
});

modal_closure.addEventListener("click", function (e) {
  e.preventDefault();
  modal_feedback.classList.remove("modal--show");
});

slider_bullit.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    document
      .querySelector(".slider-pager-link--active")
      .classList.remove("slider-pager-link--active");
    this.classList.add("slider-pager-link--active");

    let screen = this.dataset.screen;
    console.log(screen);
    document
      .querySelector(".slider-screen--active")
      .classList.remove("slider-screen--active");
    document.querySelector("." + screen).classList.add("slider-screen--active");
  });
});

sort_button.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sort-type-main-link--active").classList.remove("sort-type-main-link--active");
    this.classList.add("sort-type-main-link--active");

  });
});

sort_direction.forEach(function (el, i) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sort-type-direction-link--active").classList.remove("sort-type-direction-link--active");
    this.classList.add("sort-type-direction-link--active");

  });
});




