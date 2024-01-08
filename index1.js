document.addEventListener("click", function (e) {
  if (e.target.closest(".avatar")) {
    const avatar1 = document.querySelector("#avatar1");
    const avatar2 = document.querySelector("#avatar2");

    avatar1.classList.toggle("move-right");
    avatar2.classList.toggle("move-left");
  }
});
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
}, 300);
