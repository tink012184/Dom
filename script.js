var slideIndex = 0;
var slides = ["img1.jpg", "img2.jpg", "img3.jpg"]; // Add your images to this array
var captions = ["Caption One", "Caption Two", "Caption Three"]; // Add your captions to this array

function showSlides() {
  var i;
  var slideImage = document.getElementById("slide-image");
  var captionText = document.querySelector(".text");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slideImage.src = slides[slideIndex-1];
  captionText.innerHTML = captions[slideIndex-1];
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
