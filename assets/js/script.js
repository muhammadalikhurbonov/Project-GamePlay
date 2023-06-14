"use strict";

function modalFunction() {
  document.querySelector(".section_geroy_modal").classList.add("scale");
  document.querySelector("body").style.overflow = "hidden";
}

function removeFunction() {
  document.querySelector(".section_geroy_modal").classList.remove("scale");
  document.querySelector("body").style.overflow = "auto";
}

// var acc = document.getElementsByClassName("section_servise_main_item");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");

//     var accordion = this.nextElementSibling;
//     if (accordion.style.display === "block") {
//       accordion.style.display = "none";
//     } else {
//       accordion.style.display = "block";
//     }
//   });
// }

var swiper = new Swiper(".MYSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@2.00": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// var swiper = new Swiper(".MYSwiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     "@0.00": {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     "@0.75": {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     "@1.00": {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     "@1.50": {
//       slidesPerView: 4,
//       spaceBetween: 50,
//     },
//   },
// });
