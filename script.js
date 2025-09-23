let icon = document.querySelector(".icon");
let nav = document.querySelector("nav.navbar");
let logo = document.querySelector(".logo a")
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
    location.reload()
}
