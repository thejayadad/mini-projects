const frames = [...document.querySelectorAll(".frame")];
const viewer = document.querySelector("#viewer");
const preview = document.querySelector("#preview");
const counter = document.querySelector("#counter");
let currentIndex = 0;

function showPhoto(index) {
  currentIndex = (index + frames.length) % frames.length;
  const photo = frames[currentIndex].querySelector("img");

  preview.src = photo.src;
  preview.alt = photo.alt;
  counter.textContent = `${currentIndex + 1} / ${frames.length}`;
}

frames.forEach((frame, index) => {
  frame.addEventListener("click", () => {
    showPhoto(index);
    viewer.showModal();
  });
});

document.querySelector("#previous").addEventListener("click", () => {
  showPhoto(currentIndex - 1);
});

document.querySelector("#next").addEventListener("click", () => {
  showPhoto(currentIndex + 1);
});

viewer.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showPhoto(currentIndex - 1);
  if (event.key === "ArrowRight") showPhoto(currentIndex + 1);
});