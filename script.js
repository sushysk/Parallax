let moon = document.getElementById("moon");
let text = document.getElementById("text");
let cityRight = document.getElementById("cityRight");
let cityLeft = document.getElementById("cityLeft");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  moon.style.top = value * 0.8 + "px";
  text.style.marginTop = value * 1.5 + "px";
  cityLeft.style.top = value * -1.5 + "px";
  cityRight.style.top = value * 1.5 + "px";
});
