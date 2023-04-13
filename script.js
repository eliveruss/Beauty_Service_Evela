const burgerBtn = document.querySelector(".burger");
const burgerNav = document.querySelector(".navigation");
const burgerScrollOff = document.querySelector("body");

function burgerActive() {
  burgerBtn.classList.toggle("active");
  burgerNav.classList.toggle("active");
  burgerScrollOff.classList.toggle("active");
}

burgerBtn.addEventListener("click", burgerActive);

const links = document.querySelectorAll("a[data-subpage]");
const subpages = document.querySelectorAll(".subpage");

function switchSubpage(event) {
  event.preventDefault();
  const subpageId = event.target.getAttribute("data-subpage");

  subpages.forEach((subpage) => {
    if (subpage.id === subpageId) {
      subpage.classList.remove("notDisplay");
    } else {
      subpage.classList.add("notDisplay");
    }
  });
  burgerActive();
}

links.forEach((link) => {
  link.addEventListener("click", switchSubpage);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

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

const container = document.querySelector(".container");
document.querySelector(".slider").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}%`);
});
