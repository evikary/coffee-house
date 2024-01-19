const sliderTrack = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");
const line = document.querySelectorAll(".line");
const sliderWindow = document.querySelector(".slider-window");

let position = 0;
let lineIndex = 0;
let slideWidth;
const gap = 25;

let count = 0;
let widthLine = 0;
const oneSec = 40 / 5;

window.addEventListener("resize", (e) => {
  showSlide();
});

function countSec() {
  setTimeout(() => {
    count += 1;
    widthLine = oneSec * count;
    line[lineIndex].style.width = widthLine + "px";

    if (count === 6) {
      widthLine = 0;
      line[lineIndex].style.width = 0;
      plusSlides(1);
      showSlide();
      count = 0;
    }
    countSec();
  }, 1000);
}

countSec();

function showSlide() {
  widthLine = 0;
  count = 0;
  slideWidth = sliderWindow.offsetWidth;
  position = lineIndex * (slideWidth + gap);
  sliderTrack.style.translate = -position + "px";
}

function showLine(n) {
  if (n > line.length - 1) {
    lineIndex = 0;
    showLine(lineIndex);
  }

  if (n < 0) {
    lineIndex = line.length - 1;
    showLine(lineIndex);
  }
}

function plusSlides(n) {
  lineIndex += n;
  showLine(lineIndex);
}

nextBtn.addEventListener("click", (e) => {
  line[lineIndex].style.width = 0;
  plusSlides(1);
  showSlide();
});

prevBtn.addEventListener("click", (e) => {
  line[lineIndex].style.width = 0;
  plusSlides(-1);
  showSlide();
});
