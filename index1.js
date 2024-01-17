import { caseStudies } from "./cases.js";

const adendum = document.getElementById("adendum");
const body = document.getElementById("body");
const wwm = document.getElementById("wwm-modal");

const menu = `<ul id="menu">
<li id="product">Product</li>
<li id="code">Code</li>
<li id="design">Design</li>
</ul>
<hr />`;
const defaultMessage = `<p id="default-message">Coming soon</p>`;
document.addEventListener("click", function (e) {
  if (e.target.closest(".avatar")) {
    const avatar1 = document.querySelector("#avatar1");
    const avatar2 = document.querySelector("#avatar2");

    avatar1.classList.toggle("move-right");
    avatar2.classList.toggle("move-left");
  } else if (e.target.closest(".action-button")) {
    e.target.classList.toggle("clicked");
    if (e.target.closest("#btn-cv")) {
    } else if (e.target.closest("#btn-sample-work")) {
      adendum.innerHTML = menu + render(caseStudies);
      adendum.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.closest("#btn-get-in-touch")) {
      wwm.classList.add("shown");
      body.classList.add("blur");
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
  } else if (e.target.closest("#code")) {
    adendum.scrollIntoView({ behavior: "smooth" });
    adendum.innerHTML =
      menu +
      `<p id ="medium-intro">I've yet to compile my coding projects. But I've written about some of them on <a href="https://medium.com/@mars_escobin" target="blank">Medium</a>. I code in Javascript, Python, HTML & CSS, and I'm currently learning React. </p>
    <ul id="medium-posts">
    <li class="medium-link"><a target ="blank" href="https://medium.com/python-in-plain-english/4-python-libraries-to-help-you-make-money-from-webscraping-57ba6d8ce56d">4 Python Libraries to Help you Make Money from Webscraping
    </a></li>
    <li class="medium-link"><a target ="blank" href="https://levelup.gitconnected.com/six-easy-steps-to-create-a-telegram-bot-from-a-google-spreadsheet-b62008d2b81f">How to Create Telegram Bots Using Webhooks
    </a></li>
    <li class="medium-link"><a target ="blank" href="https://medium.com/@mars_escobin/predicting-bitcoin-prices-using-random-forest-e530f5901ed7">Predicting Bitcoin Prices using Random Forest
    </a></li>
    <li class="medium-link"><a href="https://medium.com/swlh/selecting-data-in-pandas-ff9fe1370785" target="blank">Selecting</a>, <a href="https://levelup.gitconnected.com/filtering-data-in-pandas-c7b60d1e1301" target="blank">filtering</a>, <a href="https://medium.com/@chutzpah/combining-data-in-pandas-31c984afceb7"target="blank">combining</a>, and <a href="https://medium.com/swlh/grouping-and-aggregating-data-in-pandas-7cae8c5023ce" target="blank">aggregating</a> data in Pandas</li>
    </ul>`;
  } else if (e.target.closest("#design")) {
    adendum.scrollIntoView({ behavior: "smooth" });
    adendum.innerHTML = menu + `<p>${defaultMessage}</p>`;
  } else if (e.target.closest("#product")) {
    adendum.scrollIntoView({ behavior: "smooth" });
    adendum.innerHTML = menu + render(caseStudies);
  } else if (e.target.closest("#people")) {
    adendum.scrollIntoView({ behavior: "smooth" });
    adendum.innerHTML = menu + `<p>${defaultMessage}</p>`;
  } else if (e.target.closest("#close-wwm")) {
    console.log("test");
    wwm.classList.toggle("shown");
    body.classList.toggle("blur");
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
