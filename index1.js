import { caseStudies } from "./cases.js";

const adendum = document.getElementById("adendum");
document.addEventListener("click", function (e) {
  if (e.target.closest(".avatar")) {
    const avatar1 = document.querySelector("#avatar1");
    const avatar2 = document.querySelector("#avatar2");

    avatar1.classList.toggle("move-right");
    avatar2.classList.toggle("move-left");
  } else if (e.target.closest(".action-button")) {
    e.target.classList.toggle("clicked");
    if (e.target.closest("#btn-cv")) {
      adendum.innerHTML = "<p>Your download should start shortly</p>";
    } else if (e.target.closest("#btn-sample-work")) {
      adendum.innerHTML =
        `<ul id = "menu">
      <li id = "product">Product</li>
      <li>Code</li>
      <li>Design</li>
      </ul> <hr>` + render(caseStudies);
      adendum.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.closest("#btn-get-in-touch")) {
      adendum.innerHTML = `<p id="work-with-me">Solving real problems thru tech make me happy. Feel free to email marsescobin@gmail.com if you want to partner up, collab, or hire me.</p>`;

      const location = document.getElementById("location");
      let locations = [
        "Manila",
        "Paris",
        "Split",
        "Porto",
        "Lisbon",
        "La Spezia",
        "Ho Chi Minh",
        "Rome",
        "Bangkok",
        "Budapest",
        "Singapore",
        "San Francisco",
        "Cairns",
        "Melbourne",
        "Sydney",
        "Bali.",
      ];
      let i = 0;

      const intervalId = setInterval(() => {
        location.textContent = locations[i];
        if (i >= locations.length - 1) {
          clearInterval(intervalId);
        } else {
          i++; // Increment i only if it's not the last element
        }
      }, 400);
    }
  } else if (e.target.closest(".img-div-0")) {
    const img1 = document.getElementById("img-1-0");
    const img2 = document.getElementById("img-2-0");

    img1.classList.toggle("move-right");
    img2.classList.toggle("move-left");
  } else if (e.target.closest(".img-div-1")) {
    const img1 = document.getElementById("img-1-1");
    const img2 = document.getElementById("img-2-1");

    img1.classList.toggle("move-right");
    img2.classList.toggle("move-left");
  } else if (e.target.closest(".img-div-2")) {
    const img1 = document.getElementById("img-1-2");
    const img2 = document.getElementById("img-2-2");

    img1.classList.toggle("move-right");
    img2.classList.toggle("move-left");
  }
});

function render(array) {
  const cases = array.map(
    (caseStudy, index) => `<div class = "case" id ="case-${index}" >
    <div id = "case-img-${index}" class = "case-img">
    <div id ="img-1-${index}" class = "img-div-${index} img-1">
      <img src="${caseStudy.img2}">
    </div>
    <div id ="img-2-${index}"  class = "img-div-${index} img-2">
      <img src="${caseStudy.img1}">
  </div>
    </div>
    <div class = "case-text">
      <h2>${caseStudy.title}</h2>
      <p>${caseStudy.subtitle}</p>
      <a class = "button-style" href="${caseStudy.link}" target="_blank">Read more</a>
  </div>
  <div id = "box${index}", class="box"></div>
  </div>
  `
  );
  return cases.join("");
}
