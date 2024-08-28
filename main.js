const navBar = document.querySelector(".navBar");
const header = document.querySelector("#header");
const three_bars = document.querySelector(".three-bars");
let buttonTriggered = false;

window.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  if (width > 600) {
    navBar.classList.add("show");
    header.classList.remove("floatNavBar");
  } else {
    navBar.classList.remove("show");
    header.classList.add("floatNavBar");
  }
});

window.addEventListener("resize", function () {
  const width = window.innerWidth;
  if (width > 600) {
    buttonTriggered = false;
    navBar.classList.add("show");
    header.classList.remove("floatNavBar");
    three_bars.style.transition = "transform 0.2s";
    three_bars.style.transform = "rotate(0)";
  } else if (width <= 600 && !buttonTriggered) {
    navBar.classList.remove("show");
    header.classList.add("floatNavBar");
  }
});

three_bars.addEventListener("click", () => {
  if (navBar.classList.contains("show") && buttonTriggered) {
    buttonTriggered = false;
    navBar.classList.remove("show");
    three_bars.style.transition = "transform 0.2s";
    three_bars.style.transform = "rotate(0)";
  } else {
    buttonTriggered = true;
    header.classList.add("floatNavBar");
    navBar.classList.add("show");
    three_bars.style.transition = "transform 0.2s";
    three_bars.style.transform = "rotate(-0.25turn)";
  }
});
