var images = [
    './images/babyunicorn.jpg',
    './images/dumpster.jpg',
    './images/steampunk_fairy.jpg',
    './images/tink.PNG'
]; // Add your images here
var index = 0;

window.onload = function() {
    // Create a new div for the slideshow
    var slideshow = document.createElement('div');
    slideshow.id = 'slideshow';

    // Create a new img element for the slideshow
    var img = document.createElement('img');
    img.id = 'slideImg';
    img.src = images[index];
    img.style.width = 'auto';
    img.style.height = '300px';

    // Append the img element to the slideshow div
    slideshow.appendChild(img);

    // Append the slideshow div to the body of the document
    document.body.appendChild(slideshow);

    // Start the slideshow
    setInterval(changeImage, 3000); // Change image every 3 seconds
};

function changeImage() {
    var img = document.getElementById('slideImg');
    img.src = images[index];
    index = (index + 1) % images.length;
}