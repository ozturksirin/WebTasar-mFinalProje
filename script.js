var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("sliderResim");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 6000);
}

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Tırlar Tükeniyorr!";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
