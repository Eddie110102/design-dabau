const carousel = document.querySelector("#carousel");

const carouselImage = [
  {
    title: "植栽",
    imgSrc: "carousel-1.jpg",
  },
  {
    title: "客廳",
    imgSrc: "carousel-2.jpg",
  },
  {
    title: "餐廳",
    imgSrc: "carousel-3.jpg",
  },
];

for (let i = 0; i < carouselImage.length; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", `../images/${carouselImage[i].imgSrc}`);
  img.setAttribute("alt", carouselImage[i].title);
  img.style.animationDelay = `${i * 3}s`;

  carousel.appendChild(img);
}

document.addEventListener("DOMContentLoaded", function () {});
