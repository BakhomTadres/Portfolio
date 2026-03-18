let icon = document.querySelector(".bars");
let iconMode = document.querySelector(".icon .mode");
let iconModeUl = document.querySelector(".ul .mode");
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
iconMode.onclick = () => {
  if (iconMode.innerHTML === `<i class="fa-solid fa-sun"></i>`) {
    iconMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    document.body.classList.add("light-mode");
  } else if (iconMode.innerHTML === `<i class="fa-solid fa-moon"></i>`) {
    iconMode.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    document.body.classList.remove("light-mode");
  }
};
iconModeUl.onclick = () => {
  if (iconModeUl.innerHTML === `<i class="fa-solid fa-sun"></i>`) {
    iconModeUl.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    document.body.classList.add("light-mode");
  } else if (iconModeUl.innerHTML === `<i class="fa-solid fa-moon"></i>`) {
    iconModeUl.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    document.body.classList.remove("light-mode");
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

// Arrow Up
const btnUp = document.querySelector(".btn-up");
window.onscroll = () => {
  if (this.scrollY > 100) {
    btnUp.style.display = "flex";
  } else {
    btnUp.style.display = "none";
  }
};
btnUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
