"use strict";

function modalFunction() {
  document.querySelector(".section_geroy_modal").classList.toggle("scale");
}

var acc = document.getElementsByClassName("section_servise_main_item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var accordion = this.nextElementSibling;
    if (accordion.style.display === "block") {
      accordion.style.display = "none";
    } else {
      accordion.style.display = "block";
    }
  });
}

// var swiper = new Swiper(".MYSwiper", {
//   slidesPerView: 4,
//   centeredSlides:true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// var appendNumber = 4;
// var prependNumber = 1;
// document
//   .querySelector(".prepend-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide([
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//     ]);
//   });
// document
//   .querySelector(".prepend-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide(
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//     );
//   });
// document.querySelector(".append-slide").addEventListener("click", function (e) {
//   e.preventDefault();
//   swiper.appendSlide(
//     '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//   );
// });
// document
//   .querySelector(".append-2-slides")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.appendSlide([
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//     ]);
//   });
