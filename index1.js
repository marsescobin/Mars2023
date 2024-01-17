import { caseStudies } from "./cases.js";

const adendum = document.getElementById("adendum");
const menu = `<ul id="menu">
<li id="product">Product</li>
<li id="code">Code</li>
<li id="design">Design</li>
<li id="people">People</li>
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
      adendum.innerHTML = "<p>Your download should start shortly</p>";
    } else if (e.target.closest("#btn-sample-work")) {
      adendum.innerHTML = menu + render(caseStudies);
      adendum.scrollIntoView({ behavior: "smooth" });
    } else if (e.target.closest("#btn-get-in-touch")) {
      adendum.innerHTML = `<p id="work-with-me">Solving real problems thru tech make me happy.
      Feel free to email 
      <a href="mailto:marsescobin@gmail.com">marsescobin@gmail.com</a> 
      if you want to partner up, collab, or hire me.
      Relevant links: 
      <a href="https://www.linkedin.com/in/productmars/" target="blank">LinkedIn</a>,
      <a href="https://github.com/mariannetrizha" target="blank">Github</a>,
      <a href="https://medium.com/@mars_escobin" target="blank">Medium</a>.
   </p>`;
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
      `<p>I've yet to compile my coding projects. But I've written about some of them on Medium. I code in Javascript, Python, HTML & CSS, and I'm currently learning React. My Github: <a href="https://github.com/mariannetrizha" target ="blank">@marsescobin</a> </p>
    <ul>
    <li><a target ="blank" href="https://medium.com/python-in-plain-english/4-python-libraries-to-help-you-make-money-from-webscraping-57ba6d8ce56d">4 Python Libraries to Help you Make Money from Webscraping
    </a></li>
    <li><a target ="blank" href="https://levelup.gitconnected.com/six-easy-steps-to-create-a-telegram-bot-from-a-google-spreadsheet-b62008d2b81f">How to Create Telegram Bots Using Webhooks
    </a></li>
    <li><a target ="blank" href="https://medium.com/@mars_escobin/predicting-bitcoin-prices-using-random-forest-e530f5901ed7">Predicting Bitcoin Prices using Random Forest
    </a></li>
    <li><a href="https://medium.com/swlh/selecting-data-in-pandas-ff9fe1370785" target="blank">Selecting</a>, <a href="https://levelup.gitconnected.com/filtering-data-in-pandas-c7b60d1e1301" target="blank">filtering</a>, <a href="https://medium.com/@chutzpah/combining-data-in-pandas-31c984afceb7"target="blank">combining</a>, and <a href="https://medium.com/swlh/grouping-and-aggregating-data-in-pandas-7cae8c5023ce" target="blank">aggregating</a> data in Pandas</li>
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
