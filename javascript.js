let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Update slide index and show the next slide
    slideIndex = (slideIndex + 1) % slides.length; // Use modulo to wrap around
    slides[slideIndex].style.display = "block";  

    // Change image every 3 seconds
    setTimeout(showSlides, 3000); 
}

// Initialize the slider
showSlides();

<script>
    // JavaScript validation function
    function validateContactForm(event) {
        // Prevent form submission for validation
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate name (not empty)
        if (name.trim() === "") {
            alert("Please enter your name.");
            return false;
        }

        // Validate email using regex
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        // Validate message (not empty)
        if (message.trim() === "") {
            alert("Please enter your message.");
            return false;
        }

        // If all validations pass, show success message
        alert("Thank you! Your message has been sent successfully.");
        
        // Reset form
        document.getElementById("contact-form").reset();
        return true;
    }

    // Attach the validation function to the form submission
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("contact-form");
        form.addEventListener("submit", validateContactForm);
    });
</script>
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown-content').style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown-content').style.display = 'none';
        });
    });
});

