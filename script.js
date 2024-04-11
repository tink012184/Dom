let slideIndex = 0;
const slides = [
  "images\steampunk_fairy.jpg",
  "images\tink.PNG",
  "images\dumpster.jpg",
  "images\babyunicorn.JPG"]; // Replace with your image paths
const slideImage = document.getElementById('slide');

function showSlides() {
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slideImage.src = slides[slideIndex - 1];
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Call the function to run the slideshow