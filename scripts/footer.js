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
      { title: "服務項目", link: "./service.html#service" },
      { title: "服務流程", link: "./service.html#process" },
    ],
  },
  {
    name: "作品展示",
    content: [
      {
        title: "新竹竹北-住家",
        link: "./project.html?project=hsh-zhubei-house",
      },
      {
        title: "新莊幸福路-住家",
        link: "./project.html?project=ntp-xingfu-house",
      },
      {
        title: "內湖潭美街-室內設計",
        link: "./project.html?project=tpe-tanmei-interior",
      },
    ],
  },
  { name: "線上估價" },
  {
    name: "聯絡我們",
    content: [
      {
        title: "Facebook",
        link: "https://www.facebook.com/dabao168",
        sns: true,
      },
      { title: "Line", link: "https://line.me/ti/p/oLpgC2Mjzf", sns: true },
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
      const link = document.createElement("a");
      link.setAttribute("href", sitemapList[i].content[j].link);
      link.textContent = sitemapList[i].content[j].title;
      if (sitemapList[i].content[j].sns) {
        link.setAttribute("target", "_blank");
      }
      secondLi.appendChild(link);
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
