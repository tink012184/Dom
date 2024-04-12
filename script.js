var images = ['images\babyunicorn.JPG', 'images\dumpster.jpg', 'images\steampunk_fairy.jpg', 'images\tink.PNG']; // Add your images here
var index = 0;

function changeImage() {
    var img = document.getElementById('slideshow');
    img.style.backgroundImage = 'url(' + images[index] + ')';
    index = (index + 1) % images.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds