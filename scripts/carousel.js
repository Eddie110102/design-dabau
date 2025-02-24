const carousel = document.querySelector("#carousel");

const carouselImage = [
  {
    title: "植栽",
    imgSrc:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "客廳",
    imgSrc:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJpb3J8ZW58MHx8MHx8fDI%3D",
  },
  {
    title: "餐廳",
    imgSrc:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yfGVufDB8fDB8fHwy",
  },
];

for (let i = 0; i < carouselImage.length; i++) {
  const img = document.createElement("img");
  img.setAttribute("src", carouselImage[i].imgSrc);
  img.setAttribute("alt", carouselImage[i].title);
  img.style.animationDelay = `${i * 3}s`;

  carousel.appendChild(img);
}

document.addEventListener("DOMContentLoaded", function () {});
