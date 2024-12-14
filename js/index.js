const images = [
  {
    url: "./img/MaskGroup(1).png",
  },
  {
    url: "./img/MaskGroup(2).png",
  },
  {
    url: "./img/MaskGroup(3).png",
  },
];
let curNumber = 0;
const sliderWrapper = document.querySelector(".media");
const sliderImages = sliderWrapper.querySelector(".slider__images");
const sliderDots = document.querySelector(".slider__dots");
const links = document.querySelectorAll(".link");

function initImages() {
  images.forEach((image, index) => {
    let imageElement = document.createElement("div");
    imageElement.classList = `image n${index} ${index ? "" : "active"}`;
    imageElement.dataset.index = index;
    imageElement.style.backgroundImage = `url('${image.url}')`;
    sliderImages.appendChild(imageElement);
  });
}

function initLinks() {
  links.forEach((link, index) => {
    link.classList = `link n${index} ${index ? "" : "active"}`;
    link.dataset.index = index;
  });
}
initLinks();

function initSlider(images, options) {
  if (!images || !images.length) return;
  initImages();
}

initSlider(images);

function initArrows() {
  let lastIndex = images.length - 1;

  document.querySelectorAll(".slider__arrow ").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;

      if (arrow.classList.contains("left")) {
        curNumber = curNumber === 0 ? lastIndex : curNumber - 1;
      } else {
        curNumber = curNumber === lastIndex ? 0 : curNumber + 1;
      }
      moveSlider(curNumber);
    });
  });
}
function moveSlider(num) {
  sliderImages.querySelector(".active").classList.remove("active"); //
  sliderImages.querySelector(`.n${num}`).classList.add("active");
  handleLinks(num);
}

initArrows();

function initDots() {
  images.forEach((image, index) => {
    let dotsArr = `<div class="slider__dots-item n${index} ${
      index === 0 ? "active" : ""
    }" data-index="${index}"></div>`;
    sliderDots.innerHTML += dotsArr;
  });
  sliderDots.querySelectorAll(".slider__dots-item").forEach((dotsArr) => {
    dotsArr.addEventListener("click", function () {
      moveSlider(this.dataset.index);
    });
  });
}
initDots();

function handleLinks(number) {
  links.forEach((link, index) => {
    link.classList.remove("active");
    if (number === index) {
      link.classList.add("active");
    }
  });
}
