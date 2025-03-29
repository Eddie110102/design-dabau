const footer = document.querySelector("footer");
const section = document.createElement("section");

// 標題
const DaBau = ["大寶室內裝潢設計", "DaBau Interior Design"];
const h2 = document.createElement("h2");

for (let i = 0; i < DaBau.length; i++) {
  const div = document.createElement("div");
  div.textContent = DaBau[i];
  if (i == DaBau.length - 1) {
    div.setAttribute("class", "eng");
  }
  h2.appendChild(div);
}
section.appendChild(h2);

// sitemap

const sitemapList = [
  {
    name: "產品服務",
    content: [
      { title: "服務項目", link: "" },
      { title: "服務流程", link: "" },
    ],
  },
  {
    name: "作品展示",
    content: [
      { title: "作品1", link: "" },
      { title: "作品2", link: "" },
      { title: "作品3", link: "" },
    ],
  },
  { name: "線上估價" },
  {
    name: "聯絡我們",
    content: [
      { title: "Facebook", link: "" },
      { title: "Line", link: "" },
    ],
  },
];

const sitemap = document.createElement("ul");
for (let i = 0; i < sitemapList.length; i++) {
  const li = document.createElement("li");
  li.textContent = sitemapList[i].name;

  if (sitemapList[i].content) {
    const ul = document.createElement("ul");
    for (let j = 0; j < sitemapList[i].content.length; j++) {
      const secondLi = document.createElement("li");
      secondLi.textContent = sitemapList[i].content[j].title;
      ul.appendChild(secondLi);
    }
    li.appendChild(ul);
  }

  sitemap.appendChild(li);
}
section.appendChild(sitemap);

footer.appendChild(section);

// copyright
const copyright = document.createElement("div");
copyright.setAttribute("class", "copy");
copyright.innerHTML = "COPYRIGHT&copy;2025&emsp;大寶室內裝潢設計";

footer.appendChild(copyright);
