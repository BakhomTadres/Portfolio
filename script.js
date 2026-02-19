let icon = document.querySelector(".icon");
let nav = document.querySelector("nav.navbar");
let logo = document.querySelector(".logo a");
let contactBtn = document.getElementById("btn-contact");
icon.onclick = () => {
  if (icon.innerHTML === `<i class="fa-solid fa-bars"></i>`) {
    nav.style.display = "flex";
    icon.innerHTML = `<i class="fa-solid fa-x"></i>`;
  } else if (icon.innerHTML === `<i class="fa-solid fa-x"></i>`) {
    nav.style.display = "none";
    icon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
};
logo.onclick = () => {
  location.href = "#main";
  location.reload();
};
//Contact
contactBtn.onclick = () => {
  location.href = "mailto:bakhomytadres@gmail.com";
};
// Year
let year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

// Observer Intersection Animation for Service Cards
const serviceCards = document.querySelectorAll("#services .card");
const observerServicesCards = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      el.target.classList.toggle("slide", el.isIntersecting);
      if (el.isIntersecting) {
        observerServicesCards.unobserve(el.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 400px",
  },
);
serviceCards.forEach((card) => {
  observerServicesCards.observe(card);
});

// Observer Intersection Animation for Projects Cards
const projectCards = document.querySelectorAll(
  ".projects .content .project-card",
);
const observerProjectCards = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      el.target.classList.toggle("slide", el.isIntersecting);
      if (el.isIntersecting) {
        observerProjectCards.unobserve(el.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 400px",
  },
);
projectCards.forEach((card) => {
  observerProjectCards.observe(card);
});

// Observer Intersection Animation For Contacts Cards
const contactCards = document.querySelectorAll(".contact .card");
const observerContactCards = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      el.target.classList.toggle("slide", el.isIntersecting);
      if (el.isIntersecting) {
        observerContactCards.unobserve(el.target);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 400px",
  },
);
contactCards.forEach((card) => {
  observerContactCards.observe(card);
});
