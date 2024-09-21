const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const app = document.getElementById("app");
const background = document.createElement("div");

background.id = "background";
background.style.backgroundImage = `url(image/${images[Math.floor(Math.random() * images.length)]})`;

app.appendChild(background);