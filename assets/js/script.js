"use strict";

function modalFunction() {
  document.querySelector(".section_geroy_modal").classList.add("scale");
  document.querySelector("body").style.overflow = "hidden";
  // document.querySelector(".section_geroy").style.filter = "brightness(75%)";
}

function removeFunction() {
  document.querySelector(".section_geroy_modal").classList.remove("scale");
  document.querySelector("body").style.overflow = "auto";
  document.querySelector(".section_geroy").style.filter = "brightness()";
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
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 10,
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

// const header = document.querySelector("header");
// window.addEventListener("scroll", (e) => {
//   if (scrollY >= 50) {
//     header.classList.add("header_function_fixed");
//   } else if (scrollY <= 50) {
//     header.classList.remove("header_function_fixed");
//   }
// });
