const header = document.querySelector("#header");

// 首頁連結
const logo = document.createElement("a");
// GitHub Pages
logo.setAttribute("href", "/design-dabau/");
// logo.setAttribute("href", "/");
logo.innerHTML = `<h1>
        <div>大寶室內裝潢設計</div>
        <div>DaBau Interior Design</div>
    </h1>`;

header.appendChild(logo);

// menu
const menu = document.createElement("div");
menu.setAttribute("id", "menu");
menu.innerHTML = `<i class="fa-solid fa-bars"></i>`;

header.appendChild(menu);

// nav

const list = [
  { link: "service.html", title: "產品服務" },
  { link: "project.html", title: "作品展示" },
  { link: "inquiry.html", title: "線上估價" },
  { link: "contact-us.html", title: "聯繫我們" },
];
const nav = document.createElement("nav");

for (let i = 0; i < list.length; i++) {
  const a = document.createElement("a");
  a.setAttribute("href", list[i].link);
  const div = document.createElement("div");
  div.setAttribute("class", "web-link");
  div.innerText = list[i].title;
  a.appendChild(div);
  nav.appendChild(a);
}

// social media

const snsList = [
  {
    link: "https://www.facebook.com/dabao168",
    title: "fa-brands fa-square-facebook",
  },
  { link: "https://line.me/ti/p/oLpgC2Mjzf", title: "fa-brands fa-line" },
];
const snsBox = document.createElement("div");
snsBox.setAttribute("class", "social-media-icons");

for (let j = 0; j < snsList.length; j++) {
  const a = document.createElement("a");
  a.setAttribute("href", snsList[j].link);
  a.setAttribute("target", "_blank");

  const div = document.createElement("div");
  div.setAttribute("class", "web-link");

  const i = document.createElement("i");
  i.setAttribute("class", snsList[j].title);

  div.appendChild(i);
  a.appendChild(div);
  snsBox.appendChild(a);
}

nav.appendChild(snsBox);

// close

const closeBtn = document.createElement("div");
closeBtn.setAttribute("id", "close");
closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

nav.appendChild(closeBtn);

header.appendChild(nav);
