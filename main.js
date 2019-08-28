fetch("city2.svg")
  .then(e => e.text())
  .then(d => {
    document.querySelector("#test").insertAdjacentHTML("afterbegin", d);
    animateTheLivingHellOutOfIt();
  });
function animateTheLivingHellOutOfIt() {
  let tl = new TimelineLite({ paused: true });
  tl.from(".ground", 1, { opacity: 0 })

    .staggerFrom(".tree", 2, { y: -1000, scale: 0.8, rotation: 360 }, 0.1)
    .staggerFrom(".house:nth-child(odd)", 3, { x: 2000 }, 0.1)
    .staggerFrom(
      ".house:nth-child(even)",
      2,
      { y: -1000, opacity: 0.6, ease: Power3.easeInOut },
      0.3
    )
    .staggerTo("path", 1, {
      y: () => Math.random() * 1000 - 500,
      x: () => Math.random() * 1000 - 500
    });

  tl.timeScale(1.5);
  //tl.seek(20)
  tl.restart();
}
