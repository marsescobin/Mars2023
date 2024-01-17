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
      //adendum.classList.toggle("hidden");
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
  }
});

function render(array) {
  const cases = array.map(
    (caseStudy) => `<div class = "case">
    <div class = "case-img">
    <a href="${caseStudy.link}" target="_blank"><img src="${caseStudy.img}"></a>
    </div>
    <div class = "case-text">
      <h2>${caseStudy.title}</h2>
      <p>${caseStudy.subtitle}</p>
      <a class = "button-style" href="${caseStudy.link}" target="_blank">Read more</a>
  </div>
  </div>`
  );
  return cases.join("");
}
