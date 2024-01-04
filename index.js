const cv = document.getElementById("btn-cv");
const sampleWork = document.getElementById("btn-sample-work");
const container2 = document.getElementById("container2");
const avatarHolder = document.getElementById("avatar-holder");
const avatar2 = document.getElementById("avatar2");
const avatar1 = document.getElementById("avatar1");
const location = document.getElementById("location");
const getMyCV = document.getElementById("section-get-my-cv");
const btnGetMyCV = document.getElementById("btn-cv");
const getInTouch = document.getElementById("section-get-in-touch");
const btnGetInTouch = document.getElementById("btn-get-in-touch");

container2.style.display = "none";
location.style.fontWeight = "light";

btnGetMyCV.addEventListener("click", () => (getMyCV.style.display = "block"));
btnGetInTouch.addEventListener(
  "click",
  () => (getInTouch.style.display = "block")
);
sampleWork.addEventListener("click", () => {
  container2.style.display =
    container2.style.display === "none" ? "flex" : "none";
  container2.style.position = "relative";
  container2.style.bottom = "500px";
  container2.style.backgroundColor = "white";
});

avatarHolder.addEventListener("click", () => {
  if (avatar1.style.left != "150px") {
    avatar1.style.transform = "rotate(9deg)";
    avatar1.style.left = "150px";
    avatar2.style.transform = "rotate(-9deg)";
  } else {
    avatar1.style.transform = "rotate(-9deg)";
    avatar1.style.left = "0px";
    avatar2.style.transform = "rotate(9deg)";
  }
});

let locations = [
  "Bali",
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
  "Manila",
];
let i = 0;

const intervalId = setInterval(() => {
  location.textContent = locations[i];
  if (i >= locations.length - 1) {
    // Check if it's the last element
    clearInterval(intervalId); // Stop the interval after the last element is displayed
  } else {
    i++; // Increment i only if it's not the last element
  }
}, 300);
