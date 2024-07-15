let sections = document.querySelectorAll("section");
const imgRotate = document.querySelector(".sec-4 img");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
      imgRotate.style.transform = `rotate(${top}deg)`;
    }
    // If want repeat animation
    else {
      sec.classList.remove("show-animate");
    }
  });
};
