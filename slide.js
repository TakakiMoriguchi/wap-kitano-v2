let slideIndex = 1;
showSlides(slideIndex);

// 自動的にスライドを切り替えるためのタイマーをセットする
let slideTimer = setInterval(function() {
  plusSlides(1);
}, 6000);

// スライドを手動で切り替えた場合、タイマーをリセットする
function plusSlides(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex += n);
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, 6000);
}

function currentSlide(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex = n);
  slideTimer = setInterval(function() {
    plusSlides(1);
  }, 6000);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}