// Login form

let popup = document.getElementById("popup");
const visibilityBtn = document.getElementById("visibilityBtn");
visibilityBtn.addEventListener("click", toggleVisibility);

function toggleVisibility() {
  const passwordInput = document.getElementById("myInput");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    
  } else {
    passwordInput.type = "password";
  }
}
  

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

// Login form

$(".thumbnail").on("click", function () {
  var clicked = $(this);
  var newSelection = clicked.data("big");
  var $img = $(".primary").css("background-image", "url(" + newSelection + ")");
  clicked.parent().find(".thumbnail").removeClass("selected");
  clicked.addClass("selected");
  $(".primary").empty().append($img.hide().fadeIn("slow"));
});

$(".thumbnail").on("click", function () {
  var clicked = $(this);
  var newSelection = clicked.data("big");
  var $img = $(".primary").css("background-image", "url(" + newSelection + ")");
  clicked.parent().find(".thumbnail").removeClass("selected");
  clicked.addClass("selected");
  $(".primary").empty().append($img.hide().fadeIn("slow"));
});

// Counter

let decreaseBtn = document.getElementById("btn-decrease");
let increaseBtn = document.getElementById("btn-increase");
let counter = document.getElementById("counter");
let count = 0;

decreaseBtn.addEventListener('click', ()=>{
    count --;
    counter.innerHTML = count;
});

increaseBtn.addEventListener('click', ()=>{
    count ++;
    counter.innerHTML = count;
})

// Counter

// Read More Button

const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.detailed-text')

readMoreBtn.addEventListener('click', (e)=>{
  text.classList.toggle('show-more');
  if (readMoreBtn.innerHTML === 'Read More'){
    readMoreBtn.innerHTML = 'Read Less';
  } else {
    readMoreBtn.innerHTML = 'Read More';
  }

})