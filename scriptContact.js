document.getElementById('contactForm').addEventListener('submit', function(event) {
    var isValid = true;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Simple validation checks
    if(name.length < 3) {
        alert('Name must be at least 3 characters long.');
        isValid = false;
    }
    if(!email.includes('@')) {
        alert('Please enter a valid email address.');
        isValid = false;
    }
    if(message.length < 10) {
        alert('Message must be at least 10 characters long.');
        isValid = false;
    }

    // Prevent form submission if validation fails
    if(!isValid) {
        event.preventDefault();
    }
});
