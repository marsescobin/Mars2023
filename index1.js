import { caseStudies } from "/cases.js";

const location = document.getElementById("location");
const adendum = document.getElementById("adendum");
document.addEventListener("click", function (e) {
  if (e.target.closest(".avatar")) {
    const avatar1 = document.querySelector("#avatar1");
    const avatar2 = document.querySelector("#avatar2");

    avatar1.classList.toggle("move-right");
    avatar2.classList.toggle("move-left");
  } else if (e.target.closest("#btn-sample-work")) {
    const sampleWork = document.getElementById("btn-sample-work");
    sampleWork.classList.toggle("button-clicked");
    adendum.innerHTML = render(caseStudies);
  }
});

function render(array) {
  const cases = array.map(
    (caseStudy) => `<div class = "case">
    <img src="${caseStudy.img}">
    <div class = "case-text">
      <h2>${caseStudy.title}</h2>
      <p>${caseStudy.subtitle}</p>
      <a class = "button-style" href="${caseStudy.link}">See more</a>
  </div>
  </div>`
  );
  return cases.join("");
}

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
