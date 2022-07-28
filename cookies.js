// COOKIES

const cookieContainer = document.querySelector(".cookies");
const cookieButton = document.querySelector(".accept");
const closeButton = document.querySelector(".close");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if(!localStorage.getItem("cookieBannerDisplayed"))
  cookieContainer.classList.add("active");
}, 10000)

closeButton.addEventListener("click", () => {
  cookieContainer.classList.add("closeCookies");
})