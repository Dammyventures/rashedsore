
//dl0G0WgKahiaUn2O6

document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("dl0G0WgKahiaUn2O6"); // Your User ID

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission
            
            // Get form field values
            const name = form.querySelector('input[name="name"]').value.trim();
            const email = form.querySelector('input[name="email"]').value.trim();
            const subject = form.querySelector('input[name="subject"]').value.trim();
            const message = form.querySelector('textarea[name="message"]').value.trim();
            
            // Validate that the message field is not empty
            if (message === "") {
                document.getElementById('success').innerHTML = "Please enter your message before sending.";
                return; // Stop form submission
            }

            const serviceID = 'service_3u8oz19'; // Replace with your actual service ID
            const templateID = 'template_bznt2xb'; // Replace with your actual template ID

            // Send the email using EmailJS
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    document.getElementById('success').innerHTML = "Message sent successfully!";
                    form.reset(); // Reset the form after successful submission
                }, (err) => {
                    document.getElementById('success').innerHTML = "Failed to send message. Please try again later.";
                    console.error('Failed to send message:', err);
                });
        });
    } else {
        console.error('Contact form not found!');
    }
});