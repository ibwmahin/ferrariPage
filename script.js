const nav = document.querySelector(".mainNav");
const bar = document.getElementById("bars");
bar.addEventListener("click", () => {
  nav.classList.toggle("open");
});
