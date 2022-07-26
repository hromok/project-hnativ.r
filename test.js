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