// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    (function() {
        emailjs.init("KUt79YalrzAGe4YR8");
    })();

    // Create back to top button
    const backToTop = document.createElement('button');
    backToTop.id = 'backToTop';
    backToTop.innerHTML = '↑';
    document.body.appendChild(backToTop);

    // Show/hide back to top button
    function handleScroll() {
        if (window.scrollY > 200) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }

    // Check on page load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            console.log("Sending email with data:", { name, email, subject, message });
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitButton.disabled = true;
            }
            
            // Create success message element if it doesn't exist
            let successMessage = document.getElementById('successMessage');
            if (!successMessage) {
                successMessage = document.createElement('div');
                successMessage.id = 'successMessage';
                successMessage.style.padding = '1rem';
                successMessage.style.marginTop = '1rem';
                successMessage.style.borderRadius = '5px';
                successMessage.style.textAlign = 'center';
                this.appendChild(successMessage);
            }
            
            // Send email using EmailJS
            emailjs.send("service_qvmxpss", "template_qywbgot", {
                from_name: name,
                from_email: email,
                to_email: "gauravfurniture07@gmail.com",
                subject: subject,
                message: message,
                to_name: "Gaurav",
                reply_to: email
            })
            .then(function(response) {
                console.log("Email sent successfully:", response);
                // Show success message
                successMessage.style.backgroundColor = '#4CAF50';
                successMessage.style.color = 'white';
                successMessage.innerHTML = 'Message sent successfully! Thank you for contacting me.';
                // Reset form
                contactForm.reset();
            })
            .catch(function(error) {
                console.error("Error sending email:", error);
                // Show error message
                successMessage.style.backgroundColor = '#f44336';
                successMessage.style.color = 'white';
                successMessage.innerHTML = 'Sorry, there was an error sending your message. Please try again.';
            })
            .finally(function() {
                // Reset button state
                if (submitButton) {
                    submitButton.innerHTML = 'Send Message';
                    submitButton.disabled = false;
                }
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            });
        });
    }

    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}); 