
let slideIndex = 0;
  showSlides(slideIndex);
  
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  



  // Array of image URLs
const imageUrls = [
  "images\steampunk_fairy.jpg",
  "images\tink.PNG",
  "images\dumpster.jpg",
  "images\babyunicorn.JPG"
];

// Function to display the slides
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
      slideIndex = 0;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex - 1].style.display = "block";

  // Add more logic for dots if needed
}

// You can dynamically create slide elements using the imageUrls array
for (let i = 0; i < imageUrls.length; i++) {
  const slide = document.createElement('div');
  slide.className = 'mySlides';
  // Set background image for each slide
  slide.style.backgroundImage = `url(${imageUrls[i]})`;
  // Append slide to the slideshow container
  document.querySelector('.slideshow-container').appendChild(slide);
}