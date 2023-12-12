let currentSlide = 0;
const slides = document.querySelectorAll(".carousel img");
const counter = document.querySelector(".counter");

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  // 여기를 증가하면 됩니다.
  const transformValue = -currentSlide * 100 + "%";
  document.querySelector(".carousel").style.transform =
    "translateX(" + transformValue + ")";
  updateCounter();
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function updateCounter() {
  counter.textContent = currentSlide + 1 + " / " + slides.length;
}

updateCounter();
