"use strict";

function modalFunction() {
  document.querySelector(".section_geroy_modal").classList.add("scale");
  document.querySelector("body").style.overflow = "hidden";
}

function removeFunction() {
  document.querySelector(".section_geroy_modal").classList.remove("scale");
  document.querySelector("body").style.overflow = "auto";
}

var acc = document.getElementsByClassName("section_servise_main_item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var accordion = this.nextElementSibling;
    if (accordion.style.display === "block") {
      accordion.style.display = "none";
    } else {
      accordion.style.display = "block";
    }
  });
}

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
      spaceBetween: 20,
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

// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
// var swiper = new Swiper(".MYSwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   on: {
//     autoplayTimeLeft(s, time, progress) {
//       progressCircle.style.setProperty("--progress", 1 - progress);
//       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
//     }
//   }
// });