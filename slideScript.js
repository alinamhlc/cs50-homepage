document.addEventListener("DOMContentLoaded", function () {
  // JS code for implementing a slideshow
  // code ref: https://www.w3schools.com/howto/howto_js_slideshow.asp

  var slideIndex = 0;

  // Set default pattern view
  slideShow(slideIndex);

  // Next slide button
  document.getElementById("nextBtn").addEventListener("click", nextPattern);
  function nextPattern() {
    // Navigate to next slide
    slideIndex += 1;
    slideShow(slideIndex);
  }

  // Previous slide button
  document.getElementById("prevBtn").addEventListener("click", prevPattern);
  function prevPattern() {
    // Navigate to previous slide
    slideIndex -= 1;
    slideShow(slideIndex);
  }

  function slideShow(n) {
    // Function for navigating image slides

    var slides = document.getElementsByClassName("patternSlide");

    // Check if input slide index is valid
    if (n == slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
    // Hide pattern other slides when navigating
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // Display the pattern slide and pattern the title at slideIndex
    slides[slideIndex].style.display = "block";
    var slideTitle =
      document.getElementsByClassName("slideTitle")[slideIndex].innerHTML; // get title
    document.getElementById("patternNavTitle").innerHTML = slideTitle;
  }
});
