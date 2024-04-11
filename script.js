var slideIndex = 0;
var slides = ["steampunk_fairy.jpg", "dumpster.JPG", "tink.PNG", "unicorn.JPG"]; // Add your images to this array
var captions = ["Steampunk Fairy", "Dumpster", "Tinkrebell", "Unicorn"]; // Add your captions to this array

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
