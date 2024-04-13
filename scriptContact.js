/* document.getElementById('contactForm').addEventListener('submit', function(event) {
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


function sendEmail() {
    
    const recipientEmail = 'tink012184@icloud.com'; // Replace with the actual recipient's email
    const senderEmail = 'tink012184@hotmail.com';//document.getElementById("email").value; // Replace with the sender's email
    const subject = 'KJ/Trivia Form Submitted';
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value; // Get the user's input from the form
    const both = `Name: ${name}
    Message: ${message}`;

    const email = {
        to: recipientEmail,
        from: senderEmail,
        subject: subject,
        body: both, // Use the user's input as the email content
    };

    Email.send(email)
        .then(() => alert('Email sent successfully!'))
        .catch((error) => console.error('Error sending email:', error));
}
 */


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
    })
    .catch(error => {
        document.getElementById('response').innerText = 'Error: ' + error;
    });
});