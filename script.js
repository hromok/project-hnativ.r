let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}

$(".thumbnail").on("click", function () {
  var clicked = $(this);
  var newSelection = clicked.data("big");
  var $img = $(".primary").css("background-image", "url(" + newSelection + ")");
  clicked.parent().find(".thumbnail").removeClass("selected");
  clicked.addClass("selected");
  $(".primary").empty().append($img.hide().fadeIn("slow"));
});