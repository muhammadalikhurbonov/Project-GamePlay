"use strict";

function modalFunction() {
  document.querySelector(".section_geroy_modal").classList.add("scale");
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".section_geroy_item").style.opacity = "0.4";
}

function removeFunction() {
  document.querySelector(".section_geroy_modal").classList.remove("scale");
  document.querySelector("body").style.overflow = "auto";
  document.querySelector(".section_geroy_item").style.opacity = "1";
}

var swiper = new Swiper(".MYSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    "@2.00": {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

function menuFunction() {
  document.querySelector(".header_modal").style.display = "none";
  document.querySelector(".section_main_item").style.display = "block";
}

document.querySelector(".menu").addEventListener("click", (e) => {
  e.preventDefault();
  if (window.screen.width <= 400) {
    document.querySelector(".header_modal").style.display = "block";
    document.querySelector(".section_main_item").style.display = "none";
  } else if (window.screen.width >= 400) {
    document.querySelector(".header_modal").style.display = "none";
  }
});

function fixed_icon_function() {
  document
    .querySelector(".fixed_icon_item")
    .classList.toggle("fixed_icon_active");
  document
    .querySelector(".fixed_icon_button")
    .classList.toggle("fixed_icon_active");
}

function dropdown_button_modal_function() {
  document.querySelector(".dropdown_button_modal").style.display = "block";
  document.querySelector(".section_main").style.opacity = "0.1";
  // document.querySelector("body").style.overflowY = "hidden";
}

function dropdown_button_modal_function_remove() {
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector(".section_main").style.opacity = "1";
  document.querySelector(".dropdown_button_modal").style.display = "none";
}

function submitFunction() {
  document.querySelector(".dropdown_button_modal").style.display = "none";
}
