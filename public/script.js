"use strict";

const body = document.querySelector("body");

// BURGER AND NAVIGATION

const burgerBtn = document.querySelector(".nav__burger");
const burgerNav = document.querySelector(".nav__menu");

function burgerActive() {
  burgerNav.style.setProperty("display", "block");
  setTimeout(() => {
    burgerBtn.classList.toggle("active");
    burgerNav.classList.toggle("active");
    body.classList.toggle("scroll-disabled");
    window.scrollTo(0, 0);
  }, 10);
  if (burgerNav.classList.contains("active")) {
    setTimeout(() => {
      burgerNav.style.setProperty("display", "none");
    }, 300);
  }
}

burgerBtn.addEventListener("click", burgerActive);

// BURGER AND NAVIGATION

// SWITCHING SUBPAGES

const links = document.querySelectorAll("a[data-subpage]");
const subpages = document.querySelectorAll(".subpages__subpage");

function switchSubpage(event) {
  event.preventDefault();

  const subpageId = event.target.getAttribute("data-subpage");
  subpages.forEach((subpage) =>
    subpage.id === subpageId
      ? subpage.classList.add("subpages__subpage--displayed")
      : subpage.classList.remove("subpages__subpage--displayed")
  );
  burgerActive();
}

links.forEach((link) => {
  link.addEventListener("click", switchSubpage);
});

// SWITCHING SUBPAGES

// SMOOTH LOADING

const smoothLoadingEl = document.querySelectorAll(".smooth-loading");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("shown-up");
    }
  });
});

smoothLoadingEl.forEach((el) => observer.observe(el));

// SMOOTH LOADING

// IMAGE SLIDER

const container = document.querySelector(".slider__container");
document.querySelector(".slider__bar").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}%`);
});

// IMAGE SLIDER

// REVIEWS SLIDER

const buttonNext = document.getElementById("next");
const buttonPrev = document.getElementById("prev");

let reviews = document.querySelectorAll(".review-slide");
let index = 0;

function next() {
  reviews[index].classList.remove("open");
  index = (index + 1) % reviews.length;
  reviews[index].classList.add("open");
}

function prev() {
  reviews[index].classList.remove("open");
  index = (index - 1 + reviews.length) % reviews.length;
  reviews[index].classList.add("open");
}

buttonPrev.addEventListener("click", prev);
buttonNext.addEventListener("click", next);

// REVIEWS SLIDER

// GALLERY

const galleryImages = document.querySelectorAll(".content__gallery-item img");
const galleryBtnClose = document.getElementById("gallery-close");
const galleryBtnPrev = document.getElementById("gallery-prev");
const galleryBtnNext = document.getElementById("gallery-next");

let imageIndex;

const closePopup = () => {
  body.classList.remove("scroll-disabled");
  galleryBtnClose.classList.add("hidden");
  galleryBtnPrev.classList.add("hidden");
  galleryBtnNext.classList.add("hidden");
  document.querySelector(".popup").remove();
};

const nextImage = () => {
  imageIndex = (imageIndex + 1) % galleryImages.length;
  document.querySelector(".popup img").src = galleryImages[imageIndex].src;
};

const prevImage = () => {
  imageIndex = (imageIndex - 1 + galleryImages.length) % galleryImages.length;
  document.querySelector(".popup img").src = galleryImages[imageIndex].src;
};

galleryImages.forEach((image, index) => {
  image.addEventListener("click", (event) => {
    const imageUrl = event.target.getAttribute("src");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    const popupImage = document.createElement("img");
    popupImage.src = imageUrl;
    popup.appendChild(popupImage);
    body.appendChild(popup);
    imageIndex = index;

    document.body.classList.add("scroll-disabled");

    galleryBtnClose.classList.remove("hidden");
    galleryBtnPrev.classList.remove("hidden");
    galleryBtnNext.classList.remove("hidden");

    galleryBtnClose.addEventListener("click", closePopup);
    galleryBtnNext.addEventListener("click", nextImage);
    galleryBtnPrev.addEventListener("click", prevImage);
  });
});

// GALLERY
