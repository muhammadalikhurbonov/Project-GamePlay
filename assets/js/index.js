import Letterize from "https://cdn.skypack.dev/letterizejs@2.0.0";

const test = new Letterize({
  targets: "#animateMe",
});

var animation = anime.timeline({
  targets: test.listAll,
  delay: anime.stagger(100),
  loop: true,
});

animation
  .add({
    translateY: -30,
    color: "#11e5b3",
    scale: 1.2,
  })
  .add({
    translateY: 0,
    color: "#fff",
    scale: 1,
  });
